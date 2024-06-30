import {
  Table,
  Paper,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AdditionalInformation, SpecificationValue } from "../../../types";
import { useTranslation } from "react-i18next";
import { joinValues } from "../../../util/value-formatters.util";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export enum ProductDetailsTab {
  Specifications = "specifications",
  AdditionalInformation = "additionalInformation",
  Features = "features",
}

export interface ProductDetailTabsProps {
  additionalInformation?: AdditionalInformation;
  specifications?: Record<string, SpecificationValue>;
  features?: string[];
  defaultTab?: ProductDetailsTab;
}

export default function ProductDetailTabs(
  props: Readonly<ProductDetailTabsProps>
) {
  const {
    additionalInformation,
    specifications,
    features,
    defaultTab = ProductDetailsTab.Specifications,
  } = props;

  const { t } = useTranslation();
  const [value, setValue] = useState(ProductDetailsTab.Specifications);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: ProductDetailsTab
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab
              label={t("products.specifications")}
              value={ProductDetailsTab.Specifications}
            />
            <Tab
              label={t("products.features")}
              value={ProductDetailsTab.Features}
            />
          </TabList>
        </Box>
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
        <TabPanel value={ProductDetailsTab.Features}>
          {props.features?.map((f) => (
            <Typography>{f}</Typography>
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
