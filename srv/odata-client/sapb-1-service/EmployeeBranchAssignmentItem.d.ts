import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class EmployeeBranchAssignmentItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace EmployeeBranchAssignmentItem {
    function build(json: {
        [keys: string]: FieldType;
    }): EmployeeBranchAssignmentItem;
}
//# sourceMappingURL=EmployeeBranchAssignmentItem.d.ts.map