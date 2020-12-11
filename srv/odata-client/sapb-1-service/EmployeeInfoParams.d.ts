import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeeInfoParams
 */
export interface EmployeeInfoParams {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeInfoParams.build]] instead.
 */
export declare function createEmployeeInfoParams(json: any): EmployeeInfoParams;
/**
 * EmployeeInfoParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeInfoParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeInfoParams> {
    /**
     * Representation of the [[EmployeeInfoParams.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeInfoParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeInfoParams {
    /**
     * Metadata information on all properties of the `EmployeeInfoParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeInfoParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeInfoParams;
}
//# sourceMappingURL=EmployeeInfoParams.d.ts.map