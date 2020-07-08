import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * DocumentSpecialLine
 */
export interface DocumentSpecialLine {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * After Line Number.
     * @nullable
     */
    afterLineNumber?: number;
    /**
     * Order Number.
     * @nullable
     */
    orderNumber?: number;
    /**
     * Subtotal.
     * @nullable
     */
    subtotal?: number;
    /**
     * Line Text.
     * @nullable
     */
    lineText?: string;
    /**
     * Subtotal Fc.
     * @nullable
     */
    subtotalFc?: number;
    /**
     * Subtotal Sc.
     * @nullable
     */
    subtotalSc?: number;
    /**
     * Tax Amount.
     * @nullable
     */
    taxAmount?: number;
    /**
     * Tax Amount Fc.
     * @nullable
     */
    taxAmountFc?: number;
    /**
     * Tax Amount Sc.
     * @nullable
     */
    taxAmountSc?: number;
    /**
     * Freight 1.
     * @nullable
     */
    freight1?: number;
    /**
     * Freight 1 Fc.
     * @nullable
     */
    freight1Fc?: number;
    /**
     * Freight 1 Sc.
     * @nullable
     */
    freight1Sc?: number;
    /**
     * Freight 2.
     * @nullable
     */
    freight2?: number;
    /**
     * Freight 2 Fc.
     * @nullable
     */
    freight2Fc?: number;
    /**
     * Freight 2 Sc.
     * @nullable
     */
    freight2Sc?: number;
    /**
     * Freight 3.
     * @nullable
     */
    freight3?: number;
    /**
     * Freight 3 Fc.
     * @nullable
     */
    freight3Fc?: number;
    /**
     * Freight 3 Sc.
     * @nullable
     */
    freight3Sc?: number;
    /**
     * Gross Total.
     * @nullable
     */
    grossTotal?: number;
    /**
     * Gross Total Fc.
     * @nullable
     */
    grossTotalFc?: number;
    /**
     * Gross Total Sc.
     * @nullable
     */
    grossTotalSc?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[DocumentSpecialLine.build]] instead.
 */
export declare function createDocumentSpecialLine(json: any): DocumentSpecialLine;
/**
 * DocumentSpecialLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentSpecialLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentSpecialLine.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.afterLineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    afterLineNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.orderNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    orderNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.subtotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subtotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.lineText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.subtotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subtotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.subtotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subtotalSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.taxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.taxAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.taxAmountSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxAmountSc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight1Fc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight1Fc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight1Sc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight1Sc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight2Fc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight2Fc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight2Sc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight2Sc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight3Fc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight3Fc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.freight3Sc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freight3Sc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.grossTotal]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossTotal: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.grossTotalFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossTotalFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentSpecialLine.grossTotalSc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossTotalSc: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace DocumentSpecialLine {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentSpecialLine;
}
//# sourceMappingURL=DocumentSpecialLine.d.ts.map