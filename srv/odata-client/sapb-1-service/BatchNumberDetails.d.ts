import { BatchNumberDetailsRequestBuilder } from './BatchNumberDetailsRequestBuilder';
import { Moment } from 'moment';
import { BatchDetailServiceStatusEnum } from './BatchDetailServiceStatusEnum';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BatchNumberDetails" of service "SAPB1".
 */
export declare class BatchNumberDetails extends EntityV4 implements BatchNumberDetailsType {
    /**
     * Technical entity name for BatchNumberDetails.
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
     * Status.
     * @nullable
     */
    status?: BatchDetailServiceStatusEnum;
    /**
     * Batch.
     * @nullable
     */
    batch?: string;
    /**
     * Batch Attribute 1.
     * @nullable
     */
    batchAttribute1?: string;
    /**
     * Batch Attribute 2.
     * @nullable
     */
    batchAttribute2?: string;
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
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * System Number.
     * @nullable
     */
    systemNumber?: number;
    /**
     * One-to-one navigation property to the [[Items]] entity.
     */
    item: Items;
    /**
     * Returns an entity builder to construct instances of `BatchNumberDetails`.
     * @returns A builder that constructs instances of entity type `BatchNumberDetails`.
     */
    static builder(): EntityBuilderType<BatchNumberDetails, BatchNumberDetailsType>;
    /**
     * Returns a request builder to construct requests for operations on the `BatchNumberDetails` entity type.
     * @returns A `BatchNumberDetails` request builder.
     */
    static requestBuilder(): BatchNumberDetailsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BatchNumberDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BatchNumberDetails`.
     */
    static customField(fieldName: string): CustomFieldV4<BatchNumberDetails>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Items, ItemsType } from './Items';
export interface BatchNumberDetailsType {
    docEntry?: number | null;
    itemCode?: string | null;
    itemDescription?: string | null;
    status?: BatchDetailServiceStatusEnum | null;
    batch?: string | null;
    batchAttribute1?: string | null;
    batchAttribute2?: string | null;
    admissionDate?: Moment | null;
    manufacturingDate?: Moment | null;
    expirationDate?: Moment | null;
    details?: string | null;
    systemNumber?: number | null;
    item: ItemsType;
}
export declare namespace BatchNumberDetails {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<BatchNumberDetails>;
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_CODE: StringField<BatchNumberDetails>;
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_DESCRIPTION: StringField<BatchNumberDetails>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: EnumField<BatchNumberDetails>;
    /**
     * Static representation of the [[batch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BATCH: StringField<BatchNumberDetails>;
    /**
     * Static representation of the [[batchAttribute1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BATCH_ATTRIBUTE_1: StringField<BatchNumberDetails>;
    /**
     * Static representation of the [[batchAttribute2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BATCH_ATTRIBUTE_2: StringField<BatchNumberDetails>;
    /**
     * Static representation of the [[admissionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADMISSION_DATE: DateField<BatchNumberDetails>;
    /**
     * Static representation of the [[manufacturingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURING_DATE: DateField<BatchNumberDetails>;
    /**
     * Static representation of the [[expirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPIRATION_DATE: DateField<BatchNumberDetails>;
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETAILS: StringField<BatchNumberDetails>;
    /**
     * Static representation of the [[systemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYSTEM_NUMBER: NumberField<BatchNumberDetails>;
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM: OneToOneLink<BatchNumberDetails, Items>;
    /**
     * All fields of the BatchNumberDetails entity.
     */
    const _allFields: Array<NumberField<BatchNumberDetails> | StringField<BatchNumberDetails> | EnumField<BatchNumberDetails> | DateField<BatchNumberDetails> | OneToOneLink<BatchNumberDetails, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BatchNumberDetails>;
    /**
     * All key fields of the BatchNumberDetails entity.
     */
    const _keyFields: Array<Field<BatchNumberDetails>>;
    /**
     * Mapping of all key field names to the respective static field property BatchNumberDetails.
     */
    const _keys: {
        [keys: string]: Field<BatchNumberDetails>;
    };
}
//# sourceMappingURL=BatchNumberDetails.d.ts.map