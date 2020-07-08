import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ApprovalStageParams
 */
export interface ApprovalStageParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalStageParams.build]] instead.
 */
export declare function createApprovalStageParams(json: any): ApprovalStageParams;
/**
 * ApprovalStageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalStageParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ApprovalStageParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalStageParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ApprovalStageParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalStageParams;
}
//# sourceMappingURL=ApprovalStageParams.d.ts.map