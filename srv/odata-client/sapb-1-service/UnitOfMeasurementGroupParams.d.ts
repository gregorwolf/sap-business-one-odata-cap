import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UnitOfMeasurementGroupParams
 */
export interface UnitOfMeasurementGroupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[UnitOfMeasurementGroupParams.build]] instead.
 */
export declare function createUnitOfMeasurementGroupParams(json: any): UnitOfMeasurementGroupParams;
/**
 * UnitOfMeasurementGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UnitOfMeasurementGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UnitOfMeasurementGroupParams> {
    /**
     * Representation of the [[UnitOfMeasurementGroupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UnitOfMeasurementGroupParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UnitOfMeasurementGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UnitOfMeasurementGroupParams {
    /**
     * Metadata information on all properties of the `UnitOfMeasurementGroupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UnitOfMeasurementGroupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UnitOfMeasurementGroupParams;
}
//# sourceMappingURL=UnitOfMeasurementGroupParams.d.ts.map