import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AssetDocumentParams
 */
export interface AssetDocumentParams {
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Cancellation Date.
     * @nullable
     */
    cancellationDate?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentParams.build]] instead.
 */
export declare function createAssetDocumentParams(json: any): AssetDocumentParams;
/**
 * AssetDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssetDocumentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AssetDocumentParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[AssetDocumentParams.cancellationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cancellationDate: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace AssetDocumentParams {
    function build(json: {
        [keys: string]: FieldType;
    }): AssetDocumentParams;
}
//# sourceMappingURL=AssetDocumentParams.d.ts.map