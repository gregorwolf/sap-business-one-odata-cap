import { EnhancedDiscountGroupsRequestBuilder } from './EnhancedDiscountGroupsRequestBuilder';
import { Moment } from 'moment';
import { DiscountGroupLine } from './DiscountGroupLine';
import { DiscountGroupTypeEnum } from './DiscountGroupTypeEnum';
import { DiscountGroupRelationsEnum } from './DiscountGroupRelationsEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EnhancedDiscountGroups" of service "SAPB1".
 */
export declare class EnhancedDiscountGroups extends EntityV4 implements EnhancedDiscountGroupsType {
    /**
     * Technical entity name for EnhancedDiscountGroups.
     */
    static _entityName: string;
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
     * Type.
     * @nullable
     */
    type?: DiscountGroupTypeEnum;
    /**
     * Object Code.
     * @nullable
     */
    objectCode?: string;
    /**
     * Discount Relations.
     * @nullable
     */
    discountRelations?: DiscountGroupRelationsEnum;
    /**
     * Active.
     * @nullable
     */
    active?: BoYesNoEnum;
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
     * Returns an entity builder to construct instances of `EnhancedDiscountGroups`.
     * @returns A builder that constructs instances of entity type `EnhancedDiscountGroups`.
     */
    static builder(): EntityBuilderType<EnhancedDiscountGroups, EnhancedDiscountGroupsType>;
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
    static customField(fieldName: string): CustomFieldV4<EnhancedDiscountGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EnhancedDiscountGroupsType {
    absEntry?: number | null;
    type?: DiscountGroupTypeEnum | null;
    objectCode?: string | null;
    discountRelations?: DiscountGroupRelationsEnum | null;
    active?: BoYesNoEnum | null;
    validFrom?: Moment | null;
    validTo?: Moment | null;
    discountGroupLineCollection?: DiscountGroupLine[] | null;
}
export declare namespace EnhancedDiscountGroups {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: EnumField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[objectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_CODE: StringField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[discountRelations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCOUNT_RELATIONS: EnumField<EnhancedDiscountGroups>;
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACTIVE: EnumField<EnhancedDiscountGroups>;
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
    const DISCOUNT_GROUP_LINE_COLLECTION: CollectionField<EnhancedDiscountGroups, DiscountGroupLine>;
    /**
     * All fields of the EnhancedDiscountGroups entity.
     */
    const _allFields: Array<NumberField<EnhancedDiscountGroups> | EnumField<EnhancedDiscountGroups> | StringField<EnhancedDiscountGroups> | DateField<EnhancedDiscountGroups> | CollectionField<EnhancedDiscountGroups, DiscountGroupLine>>;
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