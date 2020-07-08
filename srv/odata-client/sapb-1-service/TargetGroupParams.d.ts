import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TargetGroupParams
 */
export interface TargetGroupParams {
    /**
     * Target Group Code.
     * @nullable
     */
    targetGroupCode?: string;
    /**
     * Target Group Name.
     * @nullable
     */
    targetGroupName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TargetGroupParams.build]] instead.
 */
export declare function createTargetGroupParams(json: any): TargetGroupParams;
/**
 * TargetGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TargetGroupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TargetGroupParams.targetGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetGroupCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TargetGroupParams.targetGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    targetGroupName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TargetGroupParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TargetGroupParams;
}
//# sourceMappingURL=TargetGroupParams.d.ts.map