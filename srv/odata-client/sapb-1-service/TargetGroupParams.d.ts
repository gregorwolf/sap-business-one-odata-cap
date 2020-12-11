import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * TargetGroupParams
 */
export interface TargetGroupParams {
    /**
     * Target Group Code.
     * @nullable
     */
    targetGroupCode?: string;
    /**
     * Target Group Name.
     * @nullable
     */
    targetGroupName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TargetGroupParams.build]] instead.
 */
export declare function createTargetGroupParams(json: any): TargetGroupParams;
/**
 * TargetGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TargetGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TargetGroupParams> {
    /**
     * Representation of the [[TargetGroupParams.targetGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupParams.targetGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetGroupName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of TargetGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace TargetGroupParams {
    /**
     * Metadata information on all properties of the `TargetGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<TargetGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): TargetGroupParams;
}
//# sourceMappingURL=TargetGroupParams.d.ts.map