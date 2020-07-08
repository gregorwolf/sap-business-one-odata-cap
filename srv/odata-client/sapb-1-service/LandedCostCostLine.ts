/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createLandedCostCostLine(json: any): LandedCostCostLine {
  return LandedCostCostLine.build(json);
}

/**
 * LandedCostCostLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LandedCostCostLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[LandedCostCostLine.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LandedCostCostLine.landedCostCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  landedCostCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LandedCostCode', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostCostLine.amount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Amount', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostCostLine.amountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostCostLine.factor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Factor', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostCostLine.openAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenAmount', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostCostLine.openAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('OpenAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[LandedCostCostLine.broker]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  broker: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Broker', this, 'Edm.String');
  /**
   * Representation of the [[LandedCostCostLine.brokerName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  brokerName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BrokerName', this, 'Edm.String');
}

export namespace LandedCostCostLine {
  export function build(json: { [keys: string]: FieldType }): LandedCostCostLine {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      LandedCostCode: (landedCostCode: string) => ({ landedCostCode: edmToTs(landedCostCode, 'Edm.String') }),
      Amount: (amount: number) => ({ amount: edmToTs(amount, 'Edm.Double') }),
      AmountFC: (amountFc: number) => ({ amountFc: edmToTs(amountFc, 'Edm.Double') }),
      Factor: (factor: number) => ({ factor: edmToTs(factor, 'Edm.Double') }),
      OpenAmount: (openAmount: number) => ({ openAmount: edmToTs(openAmount, 'Edm.Double') }),
      OpenAmountFC: (openAmountFc: number) => ({ openAmountFc: edmToTs(openAmountFc, 'Edm.Double') }),
      Broker: (broker: string) => ({ broker: edmToTs(broker, 'Edm.String') }),
      BrokerName: (brokerName: string) => ({ brokerName: edmToTs(brokerName, 'Edm.String') })
    });
  }
}
