import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalTemplateStage
 */
export interface ApprovalTemplateStage {
    /**
     * Sort Id.
     * @nullable
     */
    sortId?: number;
    /**
     * Approval Stage Code.
     * @nullable
     */
    approvalStageCode?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalTemplateStage.build]] instead.
 */
export declare function createApprovalTemplateStage(json: any): ApprovalTemplateStage;
/**
 * ApprovalTemplateStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalTemplateStageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalTemplateStage.sortId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sortId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalTemplateStage.approvalStageCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approvalStageCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalTemplateStage.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ApprovalTemplateStage {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateStage;
}
//# sourceMappingURL=ApprovalTemplateStage.d.ts.map