using { managed } from '@sap/cds/common';

entity Orders : managed {
  key ID : UUID;
  product : String;
  quantity : Integer;
  price : Decimal;
  @cds.persistence.journal
  status : String;
}
