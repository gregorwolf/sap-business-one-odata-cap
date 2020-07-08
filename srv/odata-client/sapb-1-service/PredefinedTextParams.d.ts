import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PredefinedTextParams
 */
export interface PredefinedTextParams {
    /**
     * Numerator.
     * @nullable
     */
    numerator?: number;
    /**
     * Text Code.
     * @nullable
     */
    textCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PredefinedTextParams.build]] instead.
 */
export declare function createPredefinedTextParams(json: any): PredefinedTextParams;
/**
 * PredefinedTextParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PredefinedTextParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PredefinedTextParams.numerator]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    numerator: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PredefinedTextParams.textCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    textCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PredefinedTextParams {
    function build(json: {
        [keys: string]: FieldType;
    }): PredefinedTextParams;
}
//# sourceMappingURL=PredefinedTextParams.d.ts.map