import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Table,
  Paper,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { SpecificationValue } from "../../../types";
import { joinValues } from "../../../util/value-formatters.util";
import styles from "./ProductDetailTabs.module.scss";

export enum ProductDetailsTab {
  Specifications = "specifications",
  AdditionalInformation = "additionalInformation",
  Features = "features",
}

export interface ProductDetailTabsProps {
  specifications?: Record<string, SpecificationValue>;
  features?: string[];
  defaultTab?: ProductDetailsTab;
}

export default function ProductDetailTabs(
  props: Readonly<ProductDetailTabsProps>
) {
  const {
    specifications,
    features,
    defaultTab = ProductDetailsTab.Features,
  } = props;

  const { t } = useTranslation();
  const [value, setValue] = useState(defaultTab);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: ProductDetailsTab
  ) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.fullWidth}>
      <TabContext value={value}>
        <Box className={styles.headingBox}>
          <TabList onChange={handleChange}>
            <Tab
              label={t("products.features")}
              value={ProductDetailsTab.Features}
            />
            <Tab
              label={t("products.specifications")}
              value={ProductDetailsTab.Specifications}
            />
          </TabList>
        </Box>
        <TabPanel value={ProductDetailsTab.Features}>
          {features?.map((f) => (
            <Typography key={f}>{f}</Typography>
          ))}
        </TabPanel>
        <TabPanel value={ProductDetailsTab.Specifications}>
          <TableContainer sx={{ width: "fit-content" }} component={Paper}>
            <Table>
              <TableBody>
                {specifications &&
                  Object.keys(specifications).map((specification) => (
                    <TableRow
                      key={specification}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bolder" }}
                      >
                        {specification.concat(":")}
                      </TableCell>
                      <TableCell>
                        {joinValues(specifications[specification])}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
