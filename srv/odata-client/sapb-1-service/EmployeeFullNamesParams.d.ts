import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeeFullNamesParams
 */
export interface EmployeeFullNamesParams {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Employee Full Name.
     * @nullable
     */
    employeeFullName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeFullNamesParams.build]] instead.
 */
export declare function createEmployeeFullNamesParams(json: any): EmployeeFullNamesParams;
/**
 * EmployeeFullNamesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeFullNamesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeFullNamesParams> {
    /**
     * Representation of the [[EmployeeFullNamesParams.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeFullNamesParams.employeeFullName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeFullName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeFullNamesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeFullNamesParams {
    /**
     * Metadata information on all properties of the `EmployeeFullNamesParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeFullNamesParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeFullNamesParams;
}
//# sourceMappingURL=EmployeeFullNamesParams.d.ts.map