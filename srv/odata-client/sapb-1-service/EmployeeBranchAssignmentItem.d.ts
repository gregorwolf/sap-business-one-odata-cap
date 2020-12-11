import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * EmployeeBranchAssignmentItem
 */
export interface EmployeeBranchAssignmentItem {
    /**
     * Employee Id.
     * @nullable
     */
    employeeId?: number;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EmployeeBranchAssignmentItem.build]] instead.
 */
export declare function createEmployeeBranchAssignmentItem(json: any): EmployeeBranchAssignmentItem;
/**
 * EmployeeBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EmployeeBranchAssignmentItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeBranchAssignmentItem> {
    /**
     * Representation of the [[EmployeeBranchAssignmentItem.employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    employeeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EmployeeBranchAssignmentItem.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of EmployeeBranchAssignmentItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EmployeeBranchAssignmentItem {
    /**
     * Metadata information on all properties of the `EmployeeBranchAssignmentItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EmployeeBranchAssignmentItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeBranchAssignmentItem;
}
//# sourceMappingURL=EmployeeBranchAssignmentItem.d.ts.map