import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BinLocationParams
 */
export interface BinLocationParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Bin Code.
     * @nullable
     */
    binCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BinLocationParams.build]] instead.
 */
export declare function createBinLocationParams(json: any): BinLocationParams;
/**
 * BinLocationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BinLocationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BinLocationParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BinLocationParams.binCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    binCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BinLocationParams {
    function build(json: {
        [keys: string]: FieldType;
    }): BinLocationParams;
}
//# sourceMappingURL=BinLocationParams.d.ts.map