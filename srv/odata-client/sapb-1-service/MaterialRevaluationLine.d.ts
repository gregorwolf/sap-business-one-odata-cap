import { FifoLayer, FifoLayerField } from './FifoLayer';
import { SnbLines, SnbLinesField } from './SnbLines';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * MaterialRevaluationLine
 */
export interface MaterialRevaluationLine {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Item Code.
     * @nullable
     */
    itemCode?: string;
    /**
     * Item Description.
     * @nullable
     */
    itemDescription?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Price.
     * @nullable
     */
    price?: number;
    /**
     * Warehouse Code.
     * @nullable
     */
    warehouseCode?: string;
    /**
     * Actual Price.
     * @nullable
     */
    actualPrice?: number;
    /**
     * On Hand.
     * @nullable
     */
    onHand?: number;
    /**
     * Debit Credit.
     * @nullable
     */
    debitCredit?: number;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Revaluation Decrement Account.
     * @nullable
     */
    revaluationDecrementAccount?: string;
    /**
     * Revaluation Increment Account.
     * @nullable
     */
    revaluationIncrementAccount?: string;
    /**
     * Reval Amount To Stock.
     * @nullable
     */
    revalAmountToStock?: number;
    /**
     * Project.
     * @nullable
     */
    project?: string;
    /**
     * Distribution Rule.
     * @nullable
     */
    distributionRule?: string;
    /**
     * Distribution Rule 2.
     * @nullable
     */
    distributionRule2?: string;
    /**
     * Distribution Rule 3.
     * @nullable
     */
    distributionRule3?: string;
    /**
     * Distribution Rule 4.
     * @nullable
     */
    distributionRule4?: string;
    /**
     * Distribution Rule 5.
     * @nullable
     */
    distributionRule5?: string;
    /**
     * Fifo Layers.
     * @nullable
     */
    fifoLayers?: FifoLayer;
    /**
     * Snb Lines Collection.
     * @nullable
     */
    snbLinesCollection?: SnbLines;
}
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationLine.build]] instead.
 */
export declare function createMaterialRevaluationLine(json: any): MaterialRevaluationLine;
/**
 * MaterialRevaluationLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MaterialRevaluationLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MaterialRevaluationLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    itemDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.price]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    price: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouseCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.actualPrice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actualPrice: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.onHand]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    onHand: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.debitCredit]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    debitCredit: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.revaluationDecrementAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revaluationDecrementAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.revaluationIncrementAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revaluationIncrementAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.revalAmountToStock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    revalAmountToStock: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.project]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    project: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.distributionRule]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.distributionRule2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.distributionRule3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.distributionRule4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.distributionRule5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    distributionRule5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.fifoLayers]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fifoLayers: FifoLayerField<EntityT>;
    /**
     * Representation of the [[MaterialRevaluationLine.snbLinesCollection]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    snbLinesCollection: SnbLinesField<EntityT>;
}
export declare namespace MaterialRevaluationLine {
    function build(json: {
        [keys: string]: FieldType | FifoLayer | SnbLines;
    }): MaterialRevaluationLine;
}
//# sourceMappingURL=MaterialRevaluationLine.d.ts.map