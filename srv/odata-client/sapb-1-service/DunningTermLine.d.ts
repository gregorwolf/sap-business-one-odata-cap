import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DunningTermLine
 */
export interface DunningTermLine {
    /**
     * Level Num.
     * @nullable
     */
    levelNum?: number;
    /**
     * Effectiveafter.
     * @nullable
     */
    effectiveafter?: string;
    /**
     * Letter Fee.
     * @nullable
     */
    letterFee?: number;
    /**
     * Letter Fee Currency.
     * @nullable
     */
    letterFeeCurrency?: string;
    /**
     * Mininum Balance.
     * @nullable
     */
    mininumBalance?: number;
    /**
     * Mininum Balance Currency.
     * @nullable
     */
    mininumBalanceCurrency?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DunningTermLine.build]] instead.
 */
export declare function createDunningTermLine(json: any): DunningTermLine;
/**
 * DunningTermLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DunningTermLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DunningTermLine.levelNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    levelNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermLine.effectiveafter]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveafter: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermLine.letterFee]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    letterFee: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermLine.letterFeeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    letterFeeCurrency: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermLine.mininumBalance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mininumBalance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermLine.mininumBalanceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mininumBalanceCurrency: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace DunningTermLine {
    function build(json: {
        [keys: string]: FieldType;
    }): DunningTermLine;
}
//# sourceMappingURL=DunningTermLine.d.ts.map