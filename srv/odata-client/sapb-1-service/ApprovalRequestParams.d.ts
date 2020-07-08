import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalRequestParams
 */
export interface ApprovalRequestParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestParams.build]] instead.
 */
export declare function createApprovalRequestParams(json: any): ApprovalRequestParams;
/**
 * ApprovalRequestParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalRequestParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalRequestParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestParams.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ApprovalRequestParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalRequestParams;
}
//# sourceMappingURL=ApprovalRequestParams.d.ts.map