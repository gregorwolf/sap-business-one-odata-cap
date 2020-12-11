import { DunningLetterTypeEnum } from './DunningLetterTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Letter Format.
     * @nullable
     */
    letterFormat?: DunningLetterTypeEnum;
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
    /**
     * Calculate Interest.
     * @nullable
     */
    calculateInterest?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[DunningTermLine.build]] instead.
 */
export declare function createDunningTermLine(json: any): DunningTermLine;
/**
 * DunningTermLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DunningTermLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DunningTermLine> {
    /**
     * Representation of the [[DunningTermLine.levelNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    levelNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DunningTermLine.letterFormat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    letterFormat: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Representation of the [[DunningTermLine.calculateInterest]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    calculateInterest: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of DunningTermLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DunningTermLine {
    /**
     * Metadata information on all properties of the `DunningTermLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DunningTermLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DunningTermLine;
}
//# sourceMappingURL=DunningTermLine.d.ts.map