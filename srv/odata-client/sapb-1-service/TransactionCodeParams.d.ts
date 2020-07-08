import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TransactionCodeParams
 */
export interface TransactionCodeParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TransactionCodeParams.build]] instead.
 */
export declare function createTransactionCodeParams(json: any): TransactionCodeParams;
/**
 * TransactionCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TransactionCodeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TransactionCodeParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TransactionCodeParams.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TransactionCodeParams {
    function build(json: {
        [keys: string]: FieldType;
    }): TransactionCodeParams;
}
//# sourceMappingURL=TransactionCodeParams.d.ts.map