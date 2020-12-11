import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeePositionParams
 */
export interface EmployeePositionParams {
    /**
     * Position Id.
     * @nullable
     */
    positionId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeePositionParams.build]] instead.
 */
export declare function createEmployeePositionParams(json: any): EmployeePositionParams;
/**
 * EmployeePositionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeePositionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeePositionParams> {
    /**
     * Representation of the [[EmployeePositionParams.positionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    positionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePositionParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeePositionParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeePositionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeePositionParams {
    /**
     * Metadata information on all properties of the `EmployeePositionParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeePositionParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeePositionParams;
}
//# sourceMappingURL=EmployeePositionParams.d.ts.map