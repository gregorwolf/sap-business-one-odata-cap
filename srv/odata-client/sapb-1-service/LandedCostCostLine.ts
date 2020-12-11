/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostAllocationByEnum } from './LandedCostAllocationByEnum';
import { LcCostTypeEnum } from './LcCostTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { LandedCostCostCategoryEnum } from './LandedCostCostCategoryEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Allocation By.
   * @nullable
   */
  allocationBy?: LandedCostAllocationByEnum;
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
   * Cost Type.
   * @nullable
   */
  costType?: LcCostTypeEnum;
  /**
   * Include For Customs.
   * @nullable
   */
  includeForCustoms?: BoYesNoEnum;
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
  /**
   * Cost Category.
   * @nullable
   */
  costCategory?: LandedCostCostCategoryEnum;
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
export class LandedCostCostLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, LandedCostCostLine> {
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
   * Representation of the [[LandedCostCostLine.allocationBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocationBy: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllocationBy', this);
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
   * Representation of the [[LandedCostCostLine.costType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CostType', this);
  /**
   * Representation of the [[LandedCostCostLine.includeForCustoms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  includeForCustoms: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IncludeForCustoms', this);
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
  /**
   * Representation of the [[LandedCostCostLine.costCategory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costCategory: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('CostCategory', this);

  /**
   * Creates an instance of LandedCostCostLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, LandedCostCostLine);
  }
}

export namespace LandedCostCostLine {
  /**
   * Metadata information on all properties of the `LandedCostCostLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LandedCostCostLine>[] = [{
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LandedCostCode',
    name: 'landedCostCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AllocationBy',
    name: 'allocationBy',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Amount',
    name: 'amount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AmountFC',
    name: 'amountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Factor',
    name: 'factor',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'CostType',
    name: 'costType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IncludeForCustoms',
    name: 'includeForCustoms',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'OpenAmount',
    name: 'openAmount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'OpenAmountFC',
    name: 'openAmountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Broker',
    name: 'broker',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BrokerName',
    name: 'brokerName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CostCategory',
    name: 'costCategory',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): LandedCostCostLine {
    return deserializeComplexTypeV4(json, LandedCostCostLine);
  }
}
