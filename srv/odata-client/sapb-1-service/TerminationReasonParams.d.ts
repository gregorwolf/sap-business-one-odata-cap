import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TerminationReasonParams
 */
export interface TerminationReasonParams {
    /**
     * Reason Id.
     * @nullable
     */
    reasonId?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TerminationReasonParams.build]] instead.
 */
export declare function createTerminationReasonParams(json: any): TerminationReasonParams;
/**
 * TerminationReasonParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TerminationReasonParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TerminationReasonParams.reasonId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reasonId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TerminationReasonParams.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TerminationReasonParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TerminationReasonParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TerminationReasonParams;
}
//# sourceMappingURL=TerminationReasonParams.d.ts.map