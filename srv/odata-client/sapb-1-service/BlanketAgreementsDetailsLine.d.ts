import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BlanketAgreementsDetailsLine
 */
export interface BlanketAgreementsDetailsLine {
    /**
     * Agreement No.
     * @nullable
     */
    agreementNo?: number;
    /**
     * Agreement Row Number.
     * @nullable
     */
    agreementRowNumber?: number;
    /**
     * Agreement Effective Row Number.
     * @nullable
     */
    agreementEffectiveRowNumber?: number;
    /**
     * From.
     * @nullable
     */
    from?: Moment;
    /**
     * To.
     * @nullable
     */
    to?: Moment;
    /**
     * Release Information.
     * @nullable
     */
    releaseInformation?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: number;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Free Text.
     * @nullable
     */
    freeText?: string;
    /**
     * Planned Amount Lc.
     * @nullable
     */
    plannedAmountLc?: number;
    /**
     * Planned Amount Fc.
     * @nullable
     */
    plannedAmountFc?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDetailsLine.build]] instead.
 */
export declare function createBlanketAgreementsDetailsLine(json: any): BlanketAgreementsDetailsLine;
/**
 * BlanketAgreementsDetailsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BlanketAgreementsDetailsLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.agreementNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.agreementRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.agreementEffectiveRowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    agreementEffectiveRowNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.from]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    from: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.to]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    to: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.releaseInformation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    releaseInformation: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.quantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    quantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.freeText]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    freeText: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountLc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedAmountLc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    plannedAmountFc: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace BlanketAgreementsDetailsLine {
    function build(json: {
        [keys: string]: FieldType;
    }): BlanketAgreementsDetailsLine;
}
//# sourceMappingURL=BlanketAgreementsDetailsLine.d.ts.map