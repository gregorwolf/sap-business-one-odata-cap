import { PurchaseTaxInvoicesRequestBuilder } from './PurchaseTaxInvoicesRequestBuilder';
import { Moment } from 'moment';
import { PurchaseTaxInvoiceLine } from './PurchaseTaxInvoiceLine';
import { PurchaseTaxInvoiceOperationCode } from './PurchaseTaxInvoiceOperationCode';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "PurchaseTaxInvoices" of service "SAPB1".
 */
export declare class PurchaseTaxInvoices extends Entity implements PurchaseTaxInvoicesType {
    /**
     * Technical entity name for PurchaseTaxInvoices.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PurchaseTaxInvoices.
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
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Doc Date.
     * @nullable
     */
    docDate?: Moment;
    /**
     * Card Code.
     * @nullable
     */
    cardCode?: string;
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
     * Doc Due Date.
     * @nullable
     */
    docDueDate?: Moment;
    /**
     * Series.
     * @nullable
     */
    series?: number;
    /**
     * Segment.
     * @nullable
     */
    segment?: number;
    /**
     * Contact Person Code.
     * @nullable
     */
    contactPersonCode?: number;
    /**
     * Tax Date.
     * @nullable
     */
    taxDate?: Moment;
    /**
     * Comments.
     * @nullable
     */
    comments?: string;
    /**
     * Ship To Code.
     * @nullable
     */
    shipToCode?: string;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Address 2.
     * @nullable
     */
    address2?: string;
    /**
     * Doc Currency.
     * @nullable
     */
    docCurrency?: string;
    /**
     * Customer Or Vendor Ref No.
     * @nullable
     */
    customerOrVendorRefNo?: string;
    /**
     * Customer Or Vendor Name.
     * @nullable
     */
    customerOrVendorName?: string;
    /**
     * Cancel Date.
     * @nullable
     */
    cancelDate?: Moment;
    /**
     * Document Total.
     * @nullable
     */
    documentTotal?: number;
    /**
     * Tax Total.
     * @nullable
     */
    taxTotal?: number;
    /**
     * Payment Ref No.
     * @nullable
     */
    paymentRefNo?: string;
    /**
     * Payment Ref Date.
     * @nullable
     */
    paymentRefDate?: Moment;
    /**
     * Alteration Revision.
     * @nullable
     */
    alterationRevision?: number;
    /**
     * Purchase Tax Invoice Lines.
     * @nullable
     */
    purchaseTaxInvoiceLines?: PurchaseTaxInvoiceLine[];
    /**
     * Purchase Tax Invoice Operation Codes.
     * @nullable
     */
    purchaseTaxInvoiceOperationCodes?: PurchaseTaxInvoiceOperationCode[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances `PurchaseTaxInvoices`.
     * @returns A builder that constructs instances of entity type `PurchaseTaxInvoices`.
     */
    static builder(): EntityBuilderType<PurchaseTaxInvoices, PurchaseTaxInvoicesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PurchaseTaxInvoices` entity type.
     * @returns A `PurchaseTaxInvoices` request builder.
     */
    static requestBuilder(): PurchaseTaxInvoicesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PurchaseTaxInvoices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PurchaseTaxInvoices`.
     */
    static customField(fieldName: string): CustomField<PurchaseTaxInvoices>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface PurchaseTaxInvoicesType {
    docEntry?: number;
    docNum?: number;
    docDate?: Moment;
    cardCode?: string;
    creationDate?: Moment;
    updateDate?: Moment;
    docDueDate?: Moment;
    series?: number;
    segment?: number;
    contactPersonCode?: number;
    taxDate?: Moment;
    comments?: string;
    shipToCode?: string;
    address?: string;
    address2?: string;
    docCurrency?: string;
    customerOrVendorRefNo?: string;
    customerOrVendorName?: string;
    cancelDate?: Moment;
    documentTotal?: number;
    taxTotal?: number;
    paymentRefNo?: string;
    paymentRefDate?: Moment;
    alterationRevision?: number;
    purchaseTaxInvoiceLines?: PurchaseTaxInvoiceLine[];
    purchaseTaxInvoiceOperationCodes?: PurchaseTaxInvoiceOperationCode[];
    businessPartner: BusinessPartnersType;
}
export interface PurchaseTaxInvoicesTypeForceMandatory {
    docEntry: number;
    docNum: number;
    docDate: Moment;
    cardCode: string;
    creationDate: Moment;
    updateDate: Moment;
    docDueDate: Moment;
    series: number;
    segment: number;
    contactPersonCode: number;
    taxDate: Moment;
    comments: string;
    shipToCode: string;
    address: string;
    address2: string;
    docCurrency: string;
    customerOrVendorRefNo: string;
    customerOrVendorName: string;
    cancelDate: Moment;
    documentTotal: number;
    taxTotal: number;
    paymentRefNo: string;
    paymentRefDate: Moment;
    alterationRevision: number;
    purchaseTaxInvoiceLines: PurchaseTaxInvoiceLine[];
    purchaseTaxInvoiceOperationCodes: PurchaseTaxInvoiceOperationCode[];
    businessPartner: BusinessPartnersType;
}
export declare namespace PurchaseTaxInvoices {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DUE_DATE: DateField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEGMENT: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_CODE: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CURRENCY: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[customerOrVendorRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_OR_VENDOR_REF_NO: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[customerOrVendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_OR_VENDOR_NAME: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCEL_DATE: DateField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[taxTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_TOTAL: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[paymentRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REF_NO: StringField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[paymentRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REF_DATE: DateField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[alterationRevision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERATION_REVISION: NumberField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[purchaseTaxInvoiceLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_TAX_INVOICE_LINES: CollectionField<PurchaseTaxInvoices>;
    /**
     * Static representation of the [[purchaseTaxInvoiceOperationCodes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE_TAX_INVOICE_OPERATION_CODES: CollectionField<PurchaseTaxInvoices>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<PurchaseTaxInvoices, BusinessPartners>;
    /**
     * All fields of the PurchaseTaxInvoices entity.
     */
    const _allFields: Array<NumberField<PurchaseTaxInvoices> | DateField<PurchaseTaxInvoices> | StringField<PurchaseTaxInvoices> | CollectionField<PurchaseTaxInvoices> | OneToOneLink<PurchaseTaxInvoices, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PurchaseTaxInvoices>;
    /**
     * All key fields of the PurchaseTaxInvoices entity.
     */
    const _keyFields: Array<Field<PurchaseTaxInvoices>>;
    /**
     * Mapping of all key field names to the respective static field property PurchaseTaxInvoices.
     */
    const _keys: {
        [keys: string]: Field<PurchaseTaxInvoices>;
    };
}
//# sourceMappingURL=PurchaseTaxInvoices.d.ts.map