import { LandedCostsRequestBuilder } from './LandedCostsRequestBuilder';
import { Moment } from 'moment';
import { LandedCostItemLine } from './LandedCostItemLine';
import { LandedCostCostLine } from './LandedCostCostLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "LandedCosts" of service "SAPB1".
 */
export declare class LandedCosts extends Entity implements LandedCostsType {
    /**
     * Technical entity name for LandedCosts.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LandedCosts.
     */
    static _serviceName: string;
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
     * Landed Cost Number.
     * @nullable
     */
    landedCostNumber?: number;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Due Date.
     * @nullable
     */
    dueDate?: Moment;
    /**
     * Vendor Code.
     * @nullable
     */
    vendorCode?: string;
    /**
     * Vendor Name.
     * @nullable
     */
    vendorName?: string;
    /**
     * Broker.
     * @nullable
     */
    broker?: string;
    /**
     * Broker Name.
     * @nullable
     */
    brokerName?: string;
    /**
     * File Number.
     * @nullable
     */
    fileNumber?: string;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Reference.
     * @nullable
     */
    reference?: string;
    /**
     * Document Currency.
     * @nullable
     */
    documentCurrency?: string;
    /**
     * Document Rate.
     * @nullable
     */
    documentRate?: number;
    /**
     * Projected Customs.
     * @nullable
     */
    projectedCustoms?: number;
    /**
     * Actual Customs.
     * @nullable
     */
    actualCustoms?: number;
    /**
     * Actual Customs Fc.
     * @nullable
     */
    actualCustomsFc?: number;
    /**
     * Tax 1.
     * @nullable
     */
    tax1?: number;
    /**
     * Tax 2.
     * @nullable
     */
    tax2?: number;
    /**
     * Before Tax.
     * @nullable
     */
    beforeTax?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Total Freight Charges.
     * @nullable
     */
    totalFreightCharges?: number;
    /**
     * Projected Customs Fc.
     * @nullable
     */
    projectedCustomsFc?: number;
    /**
     * Tax 1 Fc.
     * @nullable
     */
    tax1Fc?: number;
    /**
     * Tax 2 Fc.
     * @nullable
     */
    tax2Fc?: number;
    /**
     * Before Tax Fc.
     * @nullable
     */
    beforeTaxFc?: number;
    /**
     * Total Fc.
     * @nullable
     */
    totalFc?: number;
    /**
     * Total Freight Charges Fc.
     * @nullable
     */
    totalFreightChargesFc?: number;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Amount To Balance.
     * @nullable
     */
    amountToBalance?: number;
    /**
     * Amount To Balance Fc.
     * @nullable
     */
    amountToBalanceFc?: number;
    /**
     * Billof Lading Number.
     * @nullable
     */
    billofLadingNumber?: string;
    /**
     * Transport Type.
     * @nullable
     */
    transportType?: number;
    /**
     * Transaction Number.
     * @nullable
     */
    transactionNumber?: number;
    /**
     * Journal Remarks.
     * @nullable
     */
    journalRemarks?: string;
    /**
     * Attachment Entry.
     * @nullable
     */
    attachmentEntry?: number;
    /**
     * Landed Cost Item Lines.
     * @nullable
     */
    landedCostItemLines?: LandedCostItemLine[];
    /**
     * Landed Cost Cost Lines.
     * @nullable
     */
    landedCostCostLines?: LandedCostCostLine[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * One-to-one navigation property to the [[ShippingTypes]] entity.
     */
    shippingType: ShippingTypes;
    /**
     * One-to-one navigation property to the [[JournalEntries]] entity.
     */
    journalEntry: JournalEntries;
    /**
     * One-to-many navigation property to the [[PurchaseDeliveryNotes]] entity.
     */
    purchaseDeliveryNotes: PurchaseDeliveryNotes[];
    /**
     * Returns an entity builder to construct instances `LandedCosts`.
     * @returns A builder that constructs instances of entity type `LandedCosts`.
     */
    static builder(): EntityBuilderType<LandedCosts, LandedCostsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LandedCosts` entity type.
     * @returns A `LandedCosts` request builder.
     */
    static requestBuilder(): LandedCostsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LandedCosts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LandedCosts`.
     */
    static customField(fieldName: string): CustomField<LandedCosts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { ShippingTypes, ShippingTypesType } from './ShippingTypes';
import { JournalEntries, JournalEntriesType } from './JournalEntries';
import { PurchaseDeliveryNotes, PurchaseDeliveryNotesType } from './PurchaseDeliveryNotes';
export interface LandedCostsType {
    docEntry?: number;
    landedCostNumber?: number;
    postingDate?: Moment;
    dueDate?: Moment;
    vendorCode?: string;
    vendorName?: string;
    broker?: string;
    brokerName?: string;
    fileNumber?: string;
    remarks?: string;
    reference?: string;
    documentCurrency?: string;
    documentRate?: number;
    projectedCustoms?: number;
    actualCustoms?: number;
    actualCustomsFc?: number;
    tax1?: number;
    tax2?: number;
    beforeTax?: number;
    total?: number;
    totalFreightCharges?: number;
    projectedCustomsFc?: number;
    tax1Fc?: number;
    tax2Fc?: number;
    beforeTaxFc?: number;
    totalFc?: number;
    totalFreightChargesFc?: number;
    series?: number;
    amountToBalance?: number;
    amountToBalanceFc?: number;
    billofLadingNumber?: string;
    transportType?: number;
    transactionNumber?: number;
    journalRemarks?: string;
    attachmentEntry?: number;
    landedCostItemLines?: LandedCostItemLine[];
    landedCostCostLines?: LandedCostCostLine[];
    businessPartner: BusinessPartnersType;
    shippingType: ShippingTypesType;
    journalEntry: JournalEntriesType;
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
}
export interface LandedCostsTypeForceMandatory {
    docEntry: number;
    landedCostNumber: number;
    postingDate: Moment;
    dueDate: Moment;
    vendorCode: string;
    vendorName: string;
    broker: string;
    brokerName: string;
    fileNumber: string;
    remarks: string;
    reference: string;
    documentCurrency: string;
    documentRate: number;
    projectedCustoms: number;
    actualCustoms: number;
    actualCustomsFc: number;
    tax1: number;
    tax2: number;
    beforeTax: number;
    total: number;
    totalFreightCharges: number;
    projectedCustomsFc: number;
    tax1Fc: number;
    tax2Fc: number;
    beforeTaxFc: number;
    totalFc: number;
    totalFreightChargesFc: number;
    series: number;
    amountToBalance: number;
    amountToBalanceFc: number;
    billofLadingNumber: string;
    transportType: number;
    transactionNumber: number;
    journalRemarks: string;
    attachmentEntry: number;
    landedCostItemLines: LandedCostItemLine[];
    landedCostCostLines: LandedCostCostLine[];
    businessPartner: BusinessPartnersType;
    shippingType: ShippingTypesType;
    journalEntry: JournalEntriesType;
    purchaseDeliveryNotes: PurchaseDeliveryNotesType[];
}
export declare namespace LandedCosts {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<LandedCosts>;
    /**
     * Static representation of the [[landedCostNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANDED_COST_NUMBER: NumberField<LandedCosts>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: DateField<LandedCosts>;
    /**
     * Static representation of the [[dueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUE_DATE: DateField<LandedCosts>;
    /**
     * Static representation of the [[vendorCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_CODE: StringField<LandedCosts>;
    /**
     * Static representation of the [[vendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_NAME: StringField<LandedCosts>;
    /**
     * Static representation of the [[broker]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BROKER: StringField<LandedCosts>;
    /**
     * Static representation of the [[brokerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BROKER_NAME: StringField<LandedCosts>;
    /**
     * Static representation of the [[fileNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_NUMBER: StringField<LandedCosts>;
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REMARKS: StringField<LandedCosts>;
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE: StringField<LandedCosts>;
    /**
     * Static representation of the [[documentCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_CURRENCY: StringField<LandedCosts>;
    /**
     * Static representation of the [[documentRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_RATE: NumberField<LandedCosts>;
    /**
     * Static representation of the [[projectedCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECTED_CUSTOMS: NumberField<LandedCosts>;
    /**
     * Static representation of the [[actualCustoms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTUAL_CUSTOMS: NumberField<LandedCosts>;
    /**
     * Static representation of the [[actualCustomsFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTUAL_CUSTOMS_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[tax1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_1: NumberField<LandedCosts>;
    /**
     * Static representation of the [[tax2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_2: NumberField<LandedCosts>;
    /**
     * Static representation of the [[beforeTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEFORE_TAX: NumberField<LandedCosts>;
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL: NumberField<LandedCosts>;
    /**
     * Static representation of the [[totalFreightCharges]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_FREIGHT_CHARGES: NumberField<LandedCosts>;
    /**
     * Static representation of the [[projectedCustomsFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROJECTED_CUSTOMS_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[tax1Fc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_1_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[tax2Fc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_2_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[beforeTaxFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BEFORE_TAX_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[totalFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[totalFreightChargesFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_FREIGHT_CHARGES_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<LandedCosts>;
    /**
     * Static representation of the [[amountToBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMOUNT_TO_BALANCE: NumberField<LandedCosts>;
    /**
     * Static representation of the [[amountToBalanceFc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMOUNT_TO_BALANCE_FC: NumberField<LandedCosts>;
    /**
     * Static representation of the [[billofLadingNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLOF_LADING_NUMBER: StringField<LandedCosts>;
    /**
     * Static representation of the [[transportType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSPORT_TYPE: NumberField<LandedCosts>;
    /**
     * Static representation of the [[transactionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_NUMBER: NumberField<LandedCosts>;
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_REMARKS: StringField<LandedCosts>;
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ENTRY: NumberField<LandedCosts>;
    /**
     * Static representation of the [[landedCostItemLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANDED_COST_ITEM_LINES: CollectionField<LandedCosts>;
    /**
     * Static representation of the [[landedCostCostLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANDED_COST_COST_LINES: CollectionField<LandedCosts>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<LandedCosts, BusinessPartners>;
    /**
     * Static representation of the one-to-one navigation property [[shippingType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIPPING_TYPE: OneToOneLink<LandedCosts, ShippingTypes>;
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOURNAL_ENTRY: OneToOneLink<LandedCosts, JournalEntries>;
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_DELIVERY_NOTES: OneToManyLink<LandedCosts, PurchaseDeliveryNotes>;
    /**
     * All fields of the LandedCosts entity.
     */
    const _allFields: Array<NumberField<LandedCosts> | DateField<LandedCosts> | StringField<LandedCosts> | CollectionField<LandedCosts> | OneToOneLink<LandedCosts, BusinessPartners> | OneToOneLink<LandedCosts, ShippingTypes> | OneToOneLink<LandedCosts, JournalEntries> | OneToManyLink<LandedCosts, PurchaseDeliveryNotes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LandedCosts>;
    /**
     * All key fields of the LandedCosts entity.
     */
    const _keyFields: Array<Field<LandedCosts>>;
    /**
     * Mapping of all key field names to the respective static field property LandedCosts.
     */
    const _keys: {
        [keys: string]: Field<LandedCosts>;
    };
}
//# sourceMappingURL=LandedCosts.d.ts.map