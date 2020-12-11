import { BoApprovalRequestDecisionEnum } from './BoApprovalRequestDecisionEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ApprovalRequestDecision
 */
export interface ApprovalRequestDecision {
    /**
     * Approver User Name.
     * @nullable
     */
    approverUserName?: string;
    /**
     * Approver Password.
     * @nullable
     */
    approverPassword?: string;
    /**
     * Status.
     * @nullable
     */
    status?: BoApprovalRequestDecisionEnum;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestDecision.build]] instead.
 */
export declare function createApprovalRequestDecision(json: any): ApprovalRequestDecision;
/**
 * ApprovalRequestDecisionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalRequestDecisionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalRequestDecision> {
    /**
     * Representation of the [[ApprovalRequestDecision.approverUserName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approverUserName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestDecision.approverPassword]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    approverPassword: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestDecision.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestDecision.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of ApprovalRequestDecisionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalRequestDecision {
    /**
     * Metadata information on all properties of the `ApprovalRequestDecision` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalRequestDecision>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalRequestDecision;
}
//# sourceMappingURL=ApprovalRequestDecision.d.ts.map