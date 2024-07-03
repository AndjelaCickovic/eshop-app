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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { SpecificationValue } from "../../types";
import { joinValues } from "../../util/value-formatters.util";
import styles from "./ProductDetailTabs.module.scss";

export enum ProductDetailsTab {
  Specifications = "specifications",
  AdditionalInformation = "additionalInformation",
  Features = "features",
}
interface ProductDetailTabsProps {
  specifications?: Record<string, SpecificationValue>;
  features?: string[];
  defaultTab?: ProductDetailsTab;
}

export function ProductDetailTabs(props: Readonly<ProductDetailTabsProps>) {
  const {
    specifications,
    features,
    defaultTab = ProductDetailsTab.Features,
  } = props;

  const [value, setValue] = useState(defaultTab);

  const theme = useTheme();
  const isSmOrMd = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: ProductDetailsTab
  ) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box className={styles.headingBox}>
          <TabList
            onChange={handleChange}
            orientation={isSmOrMd ? "vertical" : "horizontal"}
          >
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
            <Typography key={f} className={styles.textJustify}>
              {f}
            </Typography>
          ))}
        </TabPanel>
        <TabPanel value={ProductDetailsTab.Specifications}>
          <Box className={styles.tableContainer}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {specifications &&
                    Object.keys(specifications).map((specification) => (
                      <TableRow key={specification} className={styles.tableRow}>
                        <TableCell className={styles.tableHead}>
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
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default ProductDetailTabs;
