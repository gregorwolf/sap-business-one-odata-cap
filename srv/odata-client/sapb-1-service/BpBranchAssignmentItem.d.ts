import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpBranchAssignmentItem
 */
export interface BpBranchAssignmentItem {
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BpBranchAssignmentItem.build]] instead.
 */
export declare function createBpBranchAssignmentItem(json: any): BpBranchAssignmentItem;
/**
 * BpBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpBranchAssignmentItemField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpBranchAssignmentItem.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpBranchAssignmentItem.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BpBranchAssignmentItem {
    function build(json: {
        [keys: string]: FieldType;
    }): BpBranchAssignmentItem;
}
//# sourceMappingURL=BpBranchAssignmentItem.d.ts.map