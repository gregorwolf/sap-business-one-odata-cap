import { SalesTaxInvoicesRequestBuilder } from './SalesTaxInvoicesRequestBuilder';
import { Moment } from 'moment';
import { SalesTaxInvoiceLine } from './SalesTaxInvoiceLine';
import { SalesTaxInvoiceOperationCode } from './SalesTaxInvoiceOperationCode';
import { BoTaxInvoiceTypes } from './BoTaxInvoiceTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoCurrencySources } from './BoCurrencySources';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SalesTaxInvoices" of service "SAPB1".
 */
export declare class SalesTaxInvoices extends EntityV4 implements SalesTaxInvoicesType {
    /**
     * Technical entity name for SalesTaxInvoices.
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
     * Doc Num.
     * @nullable
     */
    docNum?: number;
    /**
     * Doc Type.
     * @nullable
     */
    docType?: BoTaxInvoiceTypes;
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
     * Currency Source.
     * @nullable
     */
    currencySource?: BoCurrencySources;
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
     * Sales Tax Invoice Lines.
     * @nullable
     */
    salesTaxInvoiceLines?: SalesTaxInvoiceLine[];
    /**
     * Sales Tax Invoice Operation Codes.
     * @nullable
     */
    salesTaxInvoiceOperationCodes?: SalesTaxInvoiceOperationCode[];
    /**
     * One-to-one navigation property to the [[BusinessPartners]] entity.
     */
    businessPartner: BusinessPartners;
    /**
     * Returns an entity builder to construct instances of `SalesTaxInvoices`.
     * @returns A builder that constructs instances of entity type `SalesTaxInvoices`.
     */
    static builder(): EntityBuilderType<SalesTaxInvoices, SalesTaxInvoicesType>;
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxInvoices` entity type.
     * @returns A `SalesTaxInvoices` request builder.
     */
    static requestBuilder(): SalesTaxInvoicesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxInvoices`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxInvoices`.
     */
    static customField(fieldName: string): CustomFieldV4<SalesTaxInvoices>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
export interface SalesTaxInvoicesType {
    docEntry?: number | null;
    docNum?: number | null;
    docType?: BoTaxInvoiceTypes | null;
    printed?: BoYesNoEnum | null;
    docDate?: Moment | null;
    cardCode?: string | null;
    creationDate?: Moment | null;
    updateDate?: Moment | null;
    docDueDate?: Moment | null;
    series?: number | null;
    segment?: number | null;
    contactPersonCode?: number | null;
    taxDate?: Moment | null;
    comments?: string | null;
    shipToCode?: string | null;
    address?: string | null;
    address2?: string | null;
    currencySource?: BoCurrencySources | null;
    docCurrency?: string | null;
    customerOrVendorRefNo?: string | null;
    customerOrVendorName?: string | null;
    cancelDate?: Moment | null;
    documentTotal?: number | null;
    taxTotal?: number | null;
    paymentRefNo?: string | null;
    paymentRefDate?: Moment | null;
    alterationRevision?: number | null;
    salesTaxInvoiceLines?: SalesTaxInvoiceLine[] | null;
    salesTaxInvoiceOperationCodes?: SalesTaxInvoiceOperationCode[] | null;
    businessPartner: BusinessPartnersType;
}
export declare namespace SalesTaxInvoices {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_NUM: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[docType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_TYPE: EnumField<SalesTaxInvoices>;
    /**
     * Static representation of the [[printed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTED: EnumField<SalesTaxInvoices>;
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DATE: DateField<SalesTaxInvoices>;
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CARD_CODE: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_DATE: DateField<SalesTaxInvoices>;
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UPDATE_DATE: DateField<SalesTaxInvoices>;
    /**
     * Static representation of the [[docDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_DUE_DATE: DateField<SalesTaxInvoices>;
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIES: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[segment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEGMENT: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[contactPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_CODE: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DATE: DateField<SalesTaxInvoices>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[shipToCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIP_TO_CODE: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[address2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_2: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[currencySource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_SOURCE: EnumField<SalesTaxInvoices>;
    /**
     * Static representation of the [[docCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_CURRENCY: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[customerOrVendorRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_OR_VENDOR_REF_NO: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[customerOrVendorName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_OR_VENDOR_NAME: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[cancelDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCEL_DATE: DateField<SalesTaxInvoices>;
    /**
     * Static representation of the [[documentTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TOTAL: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[taxTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_TOTAL: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[paymentRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REF_NO: StringField<SalesTaxInvoices>;
    /**
     * Static representation of the [[paymentRefDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REF_DATE: DateField<SalesTaxInvoices>;
    /**
     * Static representation of the [[alterationRevision]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERATION_REVISION: NumberField<SalesTaxInvoices>;
    /**
     * Static representation of the [[salesTaxInvoiceLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_INVOICE_LINES: CollectionField<SalesTaxInvoices, SalesTaxInvoiceLine>;
    /**
     * Static representation of the [[salesTaxInvoiceOperationCodes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_INVOICE_OPERATION_CODES: CollectionField<SalesTaxInvoices, SalesTaxInvoiceOperationCode>;
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PARTNER: OneToOneLink<SalesTaxInvoices, BusinessPartners>;
    /**
     * All fields of the SalesTaxInvoices entity.
     */
    const _allFields: Array<NumberField<SalesTaxInvoices> | EnumField<SalesTaxInvoices> | DateField<SalesTaxInvoices> | StringField<SalesTaxInvoices> | CollectionField<SalesTaxInvoices, SalesTaxInvoiceLine> | CollectionField<SalesTaxInvoices, SalesTaxInvoiceOperationCode> | OneToOneLink<SalesTaxInvoices, BusinessPartners>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SalesTaxInvoices>;
    /**
     * All key fields of the SalesTaxInvoices entity.
     */
    const _keyFields: Array<Field<SalesTaxInvoices>>;
    /**
     * Mapping of all key field names to the respective static field property SalesTaxInvoices.
     */
    const _keys: {
        [keys: string]: Field<SalesTaxInvoices>;
    };
}
//# sourceMappingURL=SalesTaxInvoices.d.ts.map