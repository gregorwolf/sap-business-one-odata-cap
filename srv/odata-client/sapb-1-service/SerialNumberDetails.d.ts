import { SerialNumberDetailsRequestBuilder } from './SerialNumberDetailsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SerialNumberDetails" of service "SAPB1".
 */
export declare class SerialNumberDetails extends EntityV4 implements SerialNumberDetailsType {
    /**
     * Technical entity name for SerialNumberDetails.
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
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Mfr Serial No.
     * @nullable
     */
    mfrSerialNo?: string;
    /**
     * Serial Number.
     * @nullable
     */
    serialNumber?: string;
    /**
     * Lot Number.
     * @nullable
     */
    lotNumber?: string;
    /**
     * System Number.
     * @nullable
     */
    systemNumber?: number;
    /**
     * Admission Date.
     * @nullable
     */
    admissionDate?: Moment;
    /**
     * Manufacturing Date.
     * @nullable
     */
    manufacturingDate?: Moment;
    /**
     * Expiration Date.
     * @nullable
     */
    expirationDate?: Moment;
    /**
     * Mfr Warranty Start.
     * @nullable
     */
    mfrWarrantyStart?: Moment;
    /**
     * M Fr Warranty End.
     * @nullable
     */
    mFrWarrantyEnd?: Moment;
    /**
     * Location.
     * @nullable
     */
    location?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * Returns an entity builder to construct instances of `SerialNumberDetails`.
     * @returns A builder that constructs instances of entity type `SerialNumberDetails`.
     */
    static builder(): EntityBuilderType<SerialNumberDetails, SerialNumberDetailsType>;
    /**
     * Returns a request builder to construct requests for operations on the `SerialNumberDetails` entity type.
     * @returns A `SerialNumberDetails` request builder.
     */
    static requestBuilder(): SerialNumberDetailsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SerialNumberDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SerialNumberDetails`.
     */
    static customField(fieldName: string): CustomFieldV4<SerialNumberDetails>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface SerialNumberDetailsType {
    docEntry?: number | null;
    itemCode?: string | null;
    itemDescription?: string | null;
    mfrSerialNo?: string | null;
    serialNumber?: string | null;
    lotNumber?: string | null;
    systemNumber?: number | null;
    admissionDate?: Moment | null;
    manufacturingDate?: Moment | null;
    expirationDate?: Moment | null;
    mfrWarrantyStart?: Moment | null;
    mFrWarrantyEnd?: Moment | null;
    location?: string | null;
    details?: string | null;
    item: ItemsType;
}
export declare namespace SerialNumberDetails {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<SerialNumberDetails>;
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<SerialNumberDetails>;
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DESCRIPTION: StringField<SerialNumberDetails>;
    /**
     * Static representation of the [[mfrSerialNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFR_SERIAL_NO: StringField<SerialNumberDetails>;
    /**
     * Static representation of the [[serialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERIAL_NUMBER: StringField<SerialNumberDetails>;
    /**
     * Static representation of the [[lotNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOT_NUMBER: StringField<SerialNumberDetails>;
    /**
     * Static representation of the [[systemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYSTEM_NUMBER: NumberField<SerialNumberDetails>;
    /**
     * Static representation of the [[admissionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADMISSION_DATE: DateField<SerialNumberDetails>;
    /**
     * Static representation of the [[manufacturingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURING_DATE: DateField<SerialNumberDetails>;
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPIRATION_DATE: DateField<SerialNumberDetails>;
    /**
     * Static representation of the [[mfrWarrantyStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFR_WARRANTY_START: DateField<SerialNumberDetails>;
    /**
     * Static representation of the [[mFrWarrantyEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const M_FR_WARRANTY_END: DateField<SerialNumberDetails>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<SerialNumberDetails>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<SerialNumberDetails>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<SerialNumberDetails, Items>;
    /**
     * All fields of the SerialNumberDetails entity.
     */
    const _allFields: Array<NumberField<SerialNumberDetails> | StringField<SerialNumberDetails> | DateField<SerialNumberDetails> | OneToOneLink<SerialNumberDetails, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SerialNumberDetails>;
    /**
     * All key fields of the SerialNumberDetails entity.
     */
    const _keyFields: Array<Field<SerialNumberDetails>>;
    /**
     * Mapping of all key field names to the respective static field property SerialNumberDetails.
     */
    const _keys: {
        [keys: string]: Field<SerialNumberDetails>;
    };
}
//# sourceMappingURL=SerialNumberDetails.d.ts.map