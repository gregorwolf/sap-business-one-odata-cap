import { EnhancedDiscountGroupsRequestBuilder } from './EnhancedDiscountGroupsRequestBuilder';
import { Moment } from 'moment';
import { DiscountGroupLine } from './DiscountGroupLine';
import { AllFields, CollectionField, CustomField, DateField, Entity, EntityBuilderType, Field, NumberField, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "EnhancedDiscountGroups" of service "SAPB1".
 */
export declare class EnhancedDiscountGroups extends Entity implements EnhancedDiscountGroupsType {
    /**
     * Technical entity name for EnhancedDiscountGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EnhancedDiscountGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Object Code.
     * @nullable
     */
    objectCode?: string;
    /**
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Discount Group Line Collection.
     * @nullable
     */
    discountGroupLineCollection?: DiscountGroupLine[];
    /**
     * Returns an entity builder to construct instances `EnhancedDiscountGroups`.
     * @returns A builder that constructs instances of entity type `EnhancedDiscountGroups`.
     */
    static builder(): EntityBuilderType<EnhancedDiscountGroups, EnhancedDiscountGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EnhancedDiscountGroups` entity type.
     * @returns A `EnhancedDiscountGroups` request builder.
     */
    static requestBuilder(): EnhancedDiscountGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EnhancedDiscountGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EnhancedDiscountGroups`.
     */
    static customField(fieldName: string): CustomField<EnhancedDiscountGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EnhancedDiscountGroupsType {
    absEntry?: number;
    objectCode?: string;
    validFrom?: Moment;
    validTo?: Moment;
    discountGroupLineCollection?: DiscountGroupLine[];
}
export interface EnhancedDiscountGroupsTypeForceMandatory {
    absEntry: number;
    objectCode: string;
    validFrom: Moment;
    validTo: Moment;
    discountGroupLineCollection: DiscountGroupLine[];
}
export declare namespace EnhancedDiscountGroups {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_CODE: StringField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[discountGroupLineCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_GROUP_LINE_COLLECTION: CollectionField<EnhancedDiscountGroups>;
    /**
     * All fields of the EnhancedDiscountGroups entity.
     */
    const _allFields: Array<NumberField<EnhancedDiscountGroups> | StringField<EnhancedDiscountGroups> | DateField<EnhancedDiscountGroups> | CollectionField<EnhancedDiscountGroups>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EnhancedDiscountGroups>;
    /**
     * All key fields of the EnhancedDiscountGroups entity.
     */
    const _keyFields: Array<Field<EnhancedDiscountGroups>>;
    /**
     * Mapping of all key field names to the respective static field property EnhancedDiscountGroups.
     */
    const _keys: {
        [keys: string]: Field<EnhancedDiscountGroups>;
    };
}
//# sourceMappingURL=EnhancedDiscountGroups.d.ts.map