import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ApprovalTemplateStageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalTemplateStage> {
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
    /**
     * Creates an instance of ApprovalTemplateStageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalTemplateStage {
    /**
     * Metadata information on all properties of the `ApprovalTemplateStage` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalTemplateStage>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalTemplateStage;
}
//# sourceMappingURL=ApprovalTemplateStage.d.ts.map