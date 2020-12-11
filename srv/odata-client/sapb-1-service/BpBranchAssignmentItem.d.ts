import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Disabled For Bp.
     * @nullable
     */
    disabledForBp?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[BpBranchAssignmentItem.build]] instead.
 */
export declare function createBpBranchAssignmentItem(json: any): BpBranchAssignmentItem;
/**
 * BpBranchAssignmentItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpBranchAssignmentItemField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpBranchAssignmentItem> {
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
    /**
     * Representation of the [[BpBranchAssignmentItem.disabledForBp]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    disabledForBp: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of BpBranchAssignmentItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace BpBranchAssignmentItem {
    /**
     * Metadata information on all properties of the `BpBranchAssignmentItem` complex type.
     */
    const _propertyMetadata: PropertyMetadata<BpBranchAssignmentItem>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): BpBranchAssignmentItem;
}
//# sourceMappingURL=BpBranchAssignmentItem.d.ts.map