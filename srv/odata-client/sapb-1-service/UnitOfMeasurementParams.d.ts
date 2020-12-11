import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * UnitOfMeasurementParams
 */
export interface UnitOfMeasurementParams {
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
 * @deprecated Since v1.6.0. Use [[UnitOfMeasurementParams.build]] instead.
 */
export declare function createUnitOfMeasurementParams(json: any): UnitOfMeasurementParams;
/**
 * UnitOfMeasurementParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class UnitOfMeasurementParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, UnitOfMeasurementParams> {
    /**
     * Representation of the [[UnitOfMeasurementParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[UnitOfMeasurementParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of UnitOfMeasurementParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace UnitOfMeasurementParams {
    /**
     * Metadata information on all properties of the `UnitOfMeasurementParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<UnitOfMeasurementParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): UnitOfMeasurementParams;
}
//# sourceMappingURL=UnitOfMeasurementParams.d.ts.map