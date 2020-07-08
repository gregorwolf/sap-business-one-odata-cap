import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * LandedCostCostLine
 */
export interface LandedCostCostLine {
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Landed Cost Code.
     * @nullable
     */
    landedCostCode?: string;
    /**
     * Amount.
     * @nullable
     */
    amount?: number;
    /**
     * Amount Fc.
     * @nullable
     */
    amountFc?: number;
    /**
     * Factor.
     * @nullable
     */
    factor?: number;
    /**
     * Open Amount.
     * @nullable
     */
    openAmount?: number;
    /**
     * Open Amount Fc.
     * @nullable
     */
    openAmountFc?: number;
    /**
     * Broker.
     * @nullable
     */
    broker?: string;
    /**
     * Broker Name.
     * @nullable
     */
    brokerName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[LandedCostCostLine.build]] instead.
 */
export declare function createLandedCostCostLine(json: any): LandedCostCostLine;
/**
 * LandedCostCostLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LandedCostCostLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[LandedCostCostLine.docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    docEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.landedCostCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    landedCostCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.amount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.amountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    amountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.factor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    factor: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.openAmount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmount: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.openAmountFc]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openAmountFc: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.broker]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    broker: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[LandedCostCostLine.brokerName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    brokerName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace LandedCostCostLine {
    function build(json: {
        [keys: string]: FieldType;
    }): LandedCostCostLine;
}
//# sourceMappingURL=LandedCostCostLine.d.ts.map