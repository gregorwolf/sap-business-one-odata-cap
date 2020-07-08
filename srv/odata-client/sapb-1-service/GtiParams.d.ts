import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * GtiParams
 */
export interface GtiParams {
    /**
     * Inbound File.
     * @nullable
     */
    inboundFile?: string;
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[GtiParams.build]] instead.
 */
export declare function createGtiParams(json: any): GtiParams;
/**
 * GtiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GtiParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GtiParams.inboundFile]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    inboundFile: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GtiParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace GtiParams {
    function build(json: {
        [keys: string]: FieldType;
    }): GtiParams;
}
//# sourceMappingURL=GtiParams.d.ts.map