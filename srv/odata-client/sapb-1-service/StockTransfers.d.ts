import { StockTransfersRequestBuilder } from './StockTransfersRequestBuilder';
import { Moment } from 'moment';
import { StockTransferApprovalRequest } from './StockTransferApprovalRequest';
import { StockTransferLine } from './StockTransferLine';
import { StockTransferTaxExtension, StockTransferTaxExtensionField } from './StockTransferTaxExtension';
import { BoYesNoEnum } from './BoYesNoEnum';
import { StockTransferAuthorizationStatusEnum } from './StockTransferAuthorizationStatusEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
import { BoStatus } from './BoStatus';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "StockTransfers" of service "SAPB1".
 */
export declare class StockTransfers extends EntityV4 implements StockTransfersType {
    /**
     * Technical entity name for StockTransfers.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Printed.
     * @nullable
     */
    printed?: BoYesNoEnum;
    /**
     * Doc Date.
     * @nullable
     */
    docDate?: Moment;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
    /**
     * Card Name.
     * @nullable
     */
    cardName?: string;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Reference 1.
     * @nullable
     */
    reference1?: string;
    /**
     * Reference 2.
     * @nullable
     */
    reference2?: string;
    /**
     * Comments.
     * @nullable
     */
    comments?: string;
    /**
     * Journal Memo.
     * @nullable
     */
    journalMemo?: string;
    /**
     * Price List.
     * @nullable
     */
    priceList?: number;
    /**
     * Sales Person Code.
     * @nullable
     */
    salesPersonCode?: number;
    /**
     * From Warehouse.
     * @nullable
     */
    fromWarehouse?: string;
    /**
     * To Warehouse.
     * @nullable
     */
    toWarehouse?: string;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Financial Period.
     * @nullable
     */
    financialPeriod?: number;
    /**
     * Trans Num.
     * @nullable
     */
    transNum?: number;
    /**
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Tax Date.
     * @nullable
     */
    taxDate?: Moment;
    /**
     * Contact Person.
     * @nullable
     */
    contactPerson?: number;
    /**
     * Folio Prefix String.
     * @nullable
     */
    folioPrefixString?: string;
    /**
     * Folio Number.
     * @nullable
     */
    folioNumber?: number;
    /**
     * Doc Object Code.
     * @nullable
     */
    docObjectCode?: string;
    /**
     * Authorization Status.
     * @nullable
     */
    authorizationStatus?: StockTransferAuthorizationStatusEnum;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
    /**
     * Bpl Name.
     * @nullable
     */
    bplName?: string;
    /**
     * Vat Reg Num.
     * @nullable
     */
    vatRegNum?: string;
    /**
     * Authorization Code.
     * @nullable
     */
    authorizationCode?: string;
    /**
     * Start Delivery Date.
     * @nullable
     */
    startDeliveryDate?: Moment;
    /**
     * Start Delivery Time.
     * @nullable
     */
    startDeliveryTime?: Time;
    /**
     * End Delivery Date.
     * @nullable
     */
    endDeliveryDate?: Moment;
    /**
     * End Delivery Time.
     * @nullable
     */
    endDeliveryTime?: Time;
    /**
     * Vehicle Plate.
     * @nullable
     */
    vehiclePlate?: string;
    /**
     * At Document Type.
     * @nullable
     */
    atDocumentType?: string;
    /**
     * E Doc Export Format.
     * @nullable
     */
    eDocExportFormat?: number;
    /**
     * Elec Comm Status.
     * @nullable
     */
    elecCommStatus?: ElecCommStatusEnum;
    /**
     * Elec Comm Message.
     * @nullable
     */
    elecCommMessage?: string;
    /**
     * Point Of Issue Code.
     * @nullable
     */
    pointOfIssueCode?: string;
    /**
     * Letter.
     * @nullable
     */
    letter?: FolioLetterEnum;
    /**
     * Folio Number From.
     * @nullable
     */
    folioNumberFrom?: number;
    /**
     * Folio Number To.
     * @nullable
     */
    folioNumberTo?: number;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Document Status.
     * @nullable
     */
    documentStatus?: BoStatus;
    /**
     * Ship To Code.
     * @nullable
     */
    shipToCode?: string;
    /**
     * Stock Transfer Approval Requests.
     * @nullable
     */
    stockTransferApprovalRequests?: StockTransferApprovalRequest[];
    /**
     * Stock Transfer Lines.
     * @nullable
     */
    stockTransferLines?: StockTransferLine[];
    /**
     * Stock Transfer Tax Extension.
     * @nullable
     */
    stockTransferTaxExtension?: StockTransferTaxExtension;
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[PriceLists]] entity.
     */
    priceList2: PriceLists;
    /**
     * One-to-one navigation property to the [[SalesPersons]] entity.
     */
    salesPerson: SalesPersons;
    /**
     * One-to-one navigation property to the [[Warehouses]] entity.
     */
    warehouse: Warehouses;
    /**
     * One-to-one navigation property to the [[JournalEntries]] entity.
     */
    journalEntry: JournalEntries;
    /**
     * One-to-one navigation property to the [[BusinessPlaces]] entity.
     */
    businessPlace: BusinessPlaces;
    /**
     * Returns an entity builder to construct instances of `StockTransfers`.
     * @returns A builder that constructs instances of entity type `StockTransfers`.
     */
    static builder(): EntityBuilderType<StockTransfers, StockTransfersType>;
    /**
     * Returns a request builder to construct requests for operations on the `StockTransfers` entity type.
     * @returns A `StockTransfers` request builder.
     */
    static requestBuilder(): StockTransfersRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTransfers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `StockTransfers`.
     */
    static customField(fieldName: string): CustomFieldV4<StockTransfers>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { PriceLists, PriceListsType } from './PriceLists';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { Warehouses, WarehousesType } from './Warehouses';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
export interface StockTransfersType {
    docEntry?: number | null;
    series?: number | null;
    printed?: BoYesNoEnum | null;
    docDate?: Moment | null;
    dueDate?: Moment | null;
    cardCode?: string | null;
    cardName?: string | null;
    address?: string | null;
    reference1?: string | null;
    reference2?: string | null;
    comments?: string | null;
    journalMemo?: string | null;
    priceList?: number | null;
    salesPersonCode?: number | null;
    fromWarehouse?: string | null;
    toWarehouse?: string | null;
    creationDate?: Moment | null;
    updateDate?: Moment | null;
    financialPeriod?: number | null;
    transNum?: number | null;
    docNum?: number | null;
    taxDate?: Moment | null;
    contactPerson?: number | null;
    folioPrefixString?: string | null;
    folioNumber?: number | null;
    docObjectCode?: string | null;
    authorizationStatus?: StockTransferAuthorizationStatusEnum | null;
    bplid?: number | null;
    bplName?: string | null;
    vatRegNum?: string | null;
    authorizationCode?: string | null;
    startDeliveryDate?: Moment | null;
    startDeliveryTime?: Time | null;
    endDeliveryDate?: Moment | null;
    endDeliveryTime?: Time | null;
    vehiclePlate?: string | null;
    atDocumentType?: string | null;
    eDocExportFormat?: number | null;
    elecCommStatus?: ElecCommStatusEnum | null;
    elecCommMessage?: string | null;
    pointOfIssueCode?: string | null;
    letter?: FolioLetterEnum | null;
    folioNumberFrom?: number | null;
    folioNumberTo?: number | null;
    attachmentEntry?: number | null;
    documentStatus?: BoStatus | null;
    shipToCode?: string | null;
    stockTransferApprovalRequests?: StockTransferApprovalRequest[] | null;
    stockTransferLines?: StockTransferLine[] | null;
    stockTransferTaxExtension?: StockTransferTaxExtension | null;
    businessPartner: BusinessPartnersType;
    priceList2: PriceListsType;
    salesPerson: SalesPersonsType;
    warehouse: WarehousesType;
    journalEntry: JournalEntriesType;
    businessPlace: BusinessPlacesType;
}
export declare namespace StockTransfers {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<StockTransfers>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<StockTransfers>;
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTED: EnumField<StockTransfers>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<StockTransfers>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<StockTransfers>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<StockTransfers>;
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_NAME: StringField<StockTransfers>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<StockTransfers>;
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_1: StringField<StockTransfers>;
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_2: StringField<StockTransfers>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<StockTransfers>;
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_MEMO: StringField<StockTransfers>;
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST: NumberField<StockTransfers>;
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON_CODE: NumberField<StockTransfers>;
    /**
     * Static representation of the [[fromWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_WAREHOUSE: StringField<StockTransfers>;
    /**
     * Static representation of the [[toWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_WAREHOUSE: StringField<StockTransfers>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<StockTransfers>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<StockTransfers>;
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FINANCIAL_PERIOD: NumberField<StockTransfers>;
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANS_NUM: NumberField<StockTransfers>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<StockTransfers>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<StockTransfers>;
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON: NumberField<StockTransfers>;
    /**
     * Static representation of the [[folioPrefixString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_PREFIX_STRING: StringField<StockTransfers>;
    /**
     * Static representation of the [[folioNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER: NumberField<StockTransfers>;
    /**
     * Static representation of the [[docObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_OBJECT_CODE: StringField<StockTransfers>;
    /**
     * Static representation of the [[authorizationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_STATUS: EnumField<StockTransfers>;
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPLID: NumberField<StockTransfers>;
    /**
     * Static representation of the [[bplName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BPL_NAME: StringField<StockTransfers>;
    /**
     * Static representation of the [[vatRegNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_REG_NUM: StringField<StockTransfers>;
    /**
     * Static representation of the [[authorizationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUTHORIZATION_CODE: StringField<StockTransfers>;
    /**
     * Static representation of the [[startDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DELIVERY_DATE: DateField<StockTransfers>;
    /**
     * Static representation of the [[startDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DELIVERY_TIME: TimeField<StockTransfers>;
    /**
     * Static representation of the [[endDeliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DELIVERY_DATE: DateField<StockTransfers>;
    /**
     * Static representation of the [[endDeliveryTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DELIVERY_TIME: TimeField<StockTransfers>;
    /**
     * Static representation of the [[vehiclePlate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VEHICLE_PLATE: StringField<StockTransfers>;
    /**
     * Static representation of the [[atDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AT_DOCUMENT_TYPE: StringField<StockTransfers>;
    /**
     * Static representation of the [[eDocExportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_DOC_EXPORT_FORMAT: NumberField<StockTransfers>;
    /**
     * Static representation of the [[elecCommStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEC_COMM_STATUS: EnumField<StockTransfers>;
    /**
     * Static representation of the [[elecCommMessage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEC_COMM_MESSAGE: StringField<StockTransfers>;
    /**
     * Static representation of the [[pointOfIssueCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POINT_OF_ISSUE_CODE: StringField<StockTransfers>;
    /**
     * Static representation of the [[letter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LETTER: EnumField<StockTransfers>;
    /**
     * Static representation of the [[folioNumberFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_FROM: NumberField<StockTransfers>;
    /**
     * Static representation of the [[folioNumberTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLIO_NUMBER_TO: NumberField<StockTransfers>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<StockTransfers>;
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_STATUS: EnumField<StockTransfers>;
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_CODE: StringField<StockTransfers>;
    /**
     * Static representation of the [[stockTransferApprovalRequests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_APPROVAL_REQUESTS: CollectionField<StockTransfers, StockTransferApprovalRequest>;
    /**
     * Static representation of the [[stockTransferLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_LINES: CollectionField<StockTransfers, StockTransferLine>;
    /**
     * Static representation of the [[stockTransferTaxExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_TRANSFER_TAX_EXTENSION: StockTransferTaxExtensionField<StockTransfers>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<StockTransfers, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[priceList2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE_LIST_2: OneToOneLink<StockTransfers, PriceLists>;
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_PERSON: OneToOneLink<StockTransfers, SalesPersons>;
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAREHOUSE: OneToOneLink<StockTransfers, Warehouses>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY: OneToOneLink<StockTransfers, JournalEntries>;
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PLACE: OneToOneLink<StockTransfers, BusinessPlaces>;
    /**
     * All fields of the StockTransfers entity.
     */
    const _allFields: Array<NumberField<StockTransfers> | EnumField<StockTransfers> | DateField<StockTransfers> | StringField<StockTransfers> | TimeField<StockTransfers> | CollectionField<StockTransfers, StockTransferApprovalRequest> | CollectionField<StockTransfers, StockTransferLine> | StockTransferTaxExtensionField<StockTransfers> | OneToOneLink<StockTransfers, BusinessPartners> | OneToOneLink<StockTransfers, PriceLists> | OneToOneLink<StockTransfers, SalesPersons> | OneToOneLink<StockTransfers, Warehouses> | OneToOneLink<StockTransfers, JournalEntries> | OneToOneLink<StockTransfers, BusinessPlaces>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<StockTransfers>;
    /**
     * All key fields of the StockTransfers entity.
     */
    const _keyFields: Array<Field<StockTransfers>>;
    /**
     * Mapping of all key field names to the respective static field property StockTransfers.
     */
    const _keys: {
        [keys: string]: Field<StockTransfers>;
    };
}
//# sourceMappingURL=StockTransfers.d.ts.map