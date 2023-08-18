/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { StockTransferApprovalRequest } from './StockTransferApprovalRequest';
import { ElectronicProtocol } from './ElectronicProtocol';
import { StockTransferLine } from './StockTransferLine';
import {
  StockTransferTaxExtension,
  StockTransferTaxExtensionField
} from './StockTransferTaxExtension';
import { DocumentReference } from './DocumentReference';
import type { InventoryTransferRequestsApi } from './InventoryTransferRequestsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { StockTransferAuthorizationStatusEnum } from './StockTransferAuthorizationStatusEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
import { BoStatus } from './BoStatus';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PaymentTermsTypes, PaymentTermsTypesType } from './PaymentTermsTypes';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Warehouses, WarehousesType } from './Warehouses';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

/**
 * This class represents the entity "InventoryTransferRequests" of service "SAPB1".
 */
export class InventoryTransferRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryTransferRequestsType<T>
{
  /**
   * Technical entity name for InventoryTransferRequests.
   */
  static _entityName = 'InventoryTransferRequests';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the InventoryTransferRequests entity
   */
  static _keys = ['DocEntry'];
  /**
   * Doc Entry.
   */
  docEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Series.
   * @nullable
   */
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Printed.
   * @nullable
   */
  printed?: BoYesNoEnum | null;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Due Date.
   * @nullable
   */
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Name.
   * @nullable
   */
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 1.
   * @nullable
   */
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference 2.
   * @nullable
   */
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Memo.
   * @nullable
   */
  journalMemo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price List.
   * @nullable
   */
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Sales Person Code.
   * @nullable
   */
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * From Warehouse.
   * @nullable
   */
  fromWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Warehouse.
   * @nullable
   */
  toWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Update Date.
   * @nullable
   */
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Financial Period.
   * @nullable
   */
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Trans Num.
   * @nullable
   */
  transNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Num.
   * @nullable
   */
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Tax Date.
   * @nullable
   */
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Contact Person.
   * @nullable
   */
  contactPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Folio Prefix String.
   * @nullable
   */
  folioPrefixString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Folio Number.
   * @nullable
   */
  folioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Doc Object Code.
   * @nullable
   */
  docObjectCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Status.
   * @nullable
   */
  authorizationStatus?: StockTransferAuthorizationStatusEnum | null;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Bpl Name.
   * @nullable
   */
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Reg Num.
   * @nullable
   */
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Code.
   * @nullable
   */
  authorizationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Delivery Date.
   * @nullable
   */
  startDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Start Delivery Time.
   * @nullable
   */
  startDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * End Delivery Date.
   * @nullable
   */
  endDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * End Delivery Time.
   * @nullable
   */
  endDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * Vehicle Plate.
   * @nullable
   */
  vehiclePlate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * At Document Type.
   * @nullable
   */
  atDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Doc Export Format.
   * @nullable
   */
  eDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Elec Comm Status.
   * @nullable
   */
  elecCommStatus?: ElecCommStatusEnum | null;
  /**
   * Elec Comm Message.
   * @nullable
   */
  elecCommMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Point Of Issue Code.
   * @nullable
   */
  pointOfIssueCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Letter.
   * @nullable
   */
  letter?: FolioLetterEnum | null;
  /**
   * Folio Number From.
   * @nullable
   */
  folioNumberFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Folio Number To.
   * @nullable
   */
  folioNumberTo?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Attachment Entry.
   * @nullable
   */
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Document Status.
   * @nullable
   */
  documentStatus?: BoStatus | null;
  /**
   * Ship To Code.
   * @nullable
   */
  shipToCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sap Passport.
   * @nullable
   */
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Page Folio Number.
   * @nullable
   */
  lastPageFolioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Duty Status.
   * @nullable
   */
  dutyStatus?: BoYesNoEnum | null;
  /**
   * U Fertigungszeit.
   * @nullable
   */
  uFertigungszeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Iltis Lieferzeit.
   * @nullable
   */
  uIltisLieferzeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  /**
   * U Cor Form Type.
   * @nullable
   */
  uCorFormType?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Belegok.
   */
  uBelegok!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Est 1.
   */
  uEst1!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Est 2.
   */
  uEst2!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Est 3.
   */
  uEst3!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 1.
   */
  uAct1!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 2.
   */
  uAct2!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 3.
   */
  uAct3!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Est 4.
   */
  uEst4!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 4.
   */
  uAct4!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Act 5.
   */
  uAct5!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * U Bs Infoservice.
   */
  uBsInfoservice!: DeserializedType<T, 'Edm.String'>;
  /**
   * U Ab Ok.
   * @nullable
   */
  uAbOk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Cor Bw From Date.
   * @nullable
   */
  uCorBwFromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Cor Bw To Date.
   * @nullable
   */
  uCorBwToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * U Testbeleg.
   * @nullable
   */
  uTestbeleg?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Artikel Detail.
   * @nullable
   */
  uArtikelDetail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Intern.
   * @nullable
   */
  uIntern?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Kalkulation.
   * @nullable
   */
  uKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Prov Best.
   * @nullable
   */
  uProvBest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Av.
   * @nullable
   */
  uAv?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Qm.
   * @nullable
   */
  uQm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Fert Stand.
   * @nullable
   */
  uFertStand?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Rahmenvertrag.
   * @nullable
   */
  uRahmenvertrag?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Rahmenvertrags Nr.
   * @nullable
   */
  uRahmenvertragsNr?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * U Eingegangen.
   * @nullable
   */
  uEingegangen?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Opp Kalkulation.
   * @nullable
   */
  uOppKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Opp Abgabeart.
   * @nullable
   */
  uOppAbgabeart?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Opp Preise.
   * @nullable
   */
  uOppPreise?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * U Einvoice.
   * @nullable
   */
  uEinvoice?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Stock Transfer Approval Requests.
   * @nullable
   */
  stockTransferApprovalRequests?: StockTransferApprovalRequest<T>[] | null;
  /**
   * Electronic Protocols.
   * @nullable
   */
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  /**
   * Stock Transfer Lines.
   * @nullable
   */
  stockTransferLines?: StockTransferLine<T>[] | null;
  /**
   * Stock Transfer Tax Extension.
   * @nullable
   */
  stockTransferTaxExtension?: StockTransferTaxExtension<T> | null;
  /**
   * Document References.
   * @nullable
   */
  documentReferences?: DocumentReference<T>[] | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link PaymentTermsTypes} entity.
   */
  paymentTermsType?: PaymentTermsTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;

  constructor(readonly _entityApi: InventoryTransferRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryTransferRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  docEntry: DeserializedType<T, 'Edm.Int32'>;
  series?: DeserializedType<T, 'Edm.Int32'> | null;
  printed?: BoYesNoEnum | null;
  docDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  dueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  cardCode?: DeserializedType<T, 'Edm.String'> | null;
  cardName?: DeserializedType<T, 'Edm.String'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  reference1?: DeserializedType<T, 'Edm.String'> | null;
  reference2?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  journalMemo?: DeserializedType<T, 'Edm.String'> | null;
  priceList?: DeserializedType<T, 'Edm.Int32'> | null;
  salesPersonCode?: DeserializedType<T, 'Edm.Int32'> | null;
  fromWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  toWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  updateDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  financialPeriod?: DeserializedType<T, 'Edm.Int32'> | null;
  transNum?: DeserializedType<T, 'Edm.Int32'> | null;
  docNum?: DeserializedType<T, 'Edm.Int32'> | null;
  taxDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  contactPerson?: DeserializedType<T, 'Edm.Int32'> | null;
  folioPrefixString?: DeserializedType<T, 'Edm.String'> | null;
  folioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  docObjectCode?: DeserializedType<T, 'Edm.String'> | null;
  authorizationStatus?: StockTransferAuthorizationStatusEnum | null;
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  bplName?: DeserializedType<T, 'Edm.String'> | null;
  vatRegNum?: DeserializedType<T, 'Edm.String'> | null;
  authorizationCode?: DeserializedType<T, 'Edm.String'> | null;
  startDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  startDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  endDeliveryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  endDeliveryTime?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  vehiclePlate?: DeserializedType<T, 'Edm.String'> | null;
  atDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  eDocExportFormat?: DeserializedType<T, 'Edm.Int32'> | null;
  elecCommStatus?: ElecCommStatusEnum | null;
  elecCommMessage?: DeserializedType<T, 'Edm.String'> | null;
  pointOfIssueCode?: DeserializedType<T, 'Edm.String'> | null;
  letter?: FolioLetterEnum | null;
  folioNumberFrom?: DeserializedType<T, 'Edm.Int32'> | null;
  folioNumberTo?: DeserializedType<T, 'Edm.Int32'> | null;
  attachmentEntry?: DeserializedType<T, 'Edm.Int32'> | null;
  documentStatus?: BoStatus | null;
  shipToCode?: DeserializedType<T, 'Edm.String'> | null;
  sapPassport?: DeserializedType<T, 'Edm.String'> | null;
  lastPageFolioNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  dutyStatus?: BoYesNoEnum | null;
  uFertigungszeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uIltisLieferzeit?: DeserializedType<T, 'Edm.TimeOfDay'> | null;
  uCorFormType?: DeserializedType<T, 'Edm.Int32'> | null;
  uBelegok: DeserializedType<T, 'Edm.String'>;
  uEst1: DeserializedType<T, 'Edm.Int32'>;
  uEst2: DeserializedType<T, 'Edm.Int32'>;
  uEst3: DeserializedType<T, 'Edm.Int32'>;
  uAct1: DeserializedType<T, 'Edm.Int32'>;
  uAct2: DeserializedType<T, 'Edm.Int32'>;
  uAct3: DeserializedType<T, 'Edm.Int32'>;
  uEst4: DeserializedType<T, 'Edm.Int32'>;
  uAct4: DeserializedType<T, 'Edm.Int32'>;
  uAct5: DeserializedType<T, 'Edm.Int32'>;
  uBsInfoservice: DeserializedType<T, 'Edm.String'>;
  uAbOk?: DeserializedType<T, 'Edm.String'> | null;
  uCorBwFromDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uCorBwToDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  uTestbeleg?: DeserializedType<T, 'Edm.String'> | null;
  uArtikelDetail?: DeserializedType<T, 'Edm.String'> | null;
  uIntern?: DeserializedType<T, 'Edm.String'> | null;
  uKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  uProvBest?: DeserializedType<T, 'Edm.String'> | null;
  uAv?: DeserializedType<T, 'Edm.String'> | null;
  uQm?: DeserializedType<T, 'Edm.String'> | null;
  uFertStand?: DeserializedType<T, 'Edm.String'> | null;
  uRahmenvertrag?: DeserializedType<T, 'Edm.Int32'> | null;
  uRahmenvertragsNr?: DeserializedType<T, 'Edm.Int32'> | null;
  uEingegangen?: DeserializedType<T, 'Edm.String'> | null;
  uOppKalkulation?: DeserializedType<T, 'Edm.String'> | null;
  uOppAbgabeart?: DeserializedType<T, 'Edm.String'> | null;
  uOppPreise?: DeserializedType<T, 'Edm.String'> | null;
  uEinvoice?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  stockTransferApprovalRequests?: StockTransferApprovalRequest<T>[] | null;
  electronicProtocols?: ElectronicProtocol<T>[] | null;
  stockTransferLines?: StockTransferLine<T>[] | null;
  stockTransferTaxExtension?: StockTransferTaxExtension<T> | null;
  documentReferences?: DocumentReference<T>[] | null;
  businessPartner?: BusinessPartnersType<T> | null;
  paymentTermsType?: PaymentTermsTypesType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  warehouse?: WarehousesType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
}
