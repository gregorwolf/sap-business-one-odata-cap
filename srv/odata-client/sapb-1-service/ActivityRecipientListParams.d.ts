import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ActivityRecipientListParams
 */
export interface ActivityRecipientListParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Active.
     * @nullable
     */
    active?: BoYesNoEnum;
    /**
     * Is Multiple.
     * @nullable
     */
    isMultiple?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipientListParams.build]] instead.
 */
export declare function createActivityRecipientListParams(json: any): ActivityRecipientListParams;
/**
 * ActivityRecipientListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityRecipientListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityRecipientListParams> {
    /**
     * Representation of the [[ActivityRecipientListParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityRecipientListParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityRecipientListParams.active]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    active: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ActivityRecipientListParams.isMultiple]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isMultiple: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ActivityRecipientListParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ActivityRecipientListParams {
    /**
     * Metadata information on all properties of the `ActivityRecipientListParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ActivityRecipientListParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityRecipientListParams;
}
//# sourceMappingURL=ActivityRecipientListParams.d.ts.map