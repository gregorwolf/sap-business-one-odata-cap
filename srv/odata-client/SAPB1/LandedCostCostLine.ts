/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostAllocationByEnum } from './LandedCostAllocationByEnum';
import { LcCostTypeEnum } from './LcCostTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { LandedCostCostCategoryEnum } from './LandedCostCostCategoryEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * LandedCostCostLine
 */
export interface LandedCostCostLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Landed Cost Code.
   * @nullable
   */
  landedCostCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Allocation By.
   * @nullable
   */
  allocationBy?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Amount.
   * @nullable
   */
  amount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Amount Fc.
   * @nullable
   */
  amountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor.
   * @nullable
   */
  factor?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Cost Type.
   * @nullable
   */
  costType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Include For Customs.
   * @nullable
   */
  includeForCustoms?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Open Amount.
   * @nullable
   */
  openAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Open Amount Fc.
   * @nullable
   */
  openAmountFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Broker.
   * @nullable
   */
  broker?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Broker Name.
   * @nullable
   */
  brokerName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cost Category.
   * @nullable
   */
  costCategory?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * LandedCostCostLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class LandedCostCostLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  LandedCostCostLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link LandedCostCostLine.docEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link LandedCostCostLine.landedCostCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  landedCostCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'LandedCostCode',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LandedCostCostLine.allocationBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allocationBy: EnumField<
    EntityT,
    DeSerializersT,
    LandedCostAllocationByEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'AllocationBy',
    LandedCostAllocationByEnum,
    true
  );
  /**
   * Representation of the {@link LandedCostCostLine.amount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Amount', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostCostLine.amountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostCostLine.factor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostCostLine.costType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costType: EnumField<EntityT, DeSerializersT, LcCostTypeEnum, true, false> =
    this._fieldBuilder.buildEnumField('CostType', LcCostTypeEnum, true);
  /**
   * Representation of the {@link LandedCostCostLine.includeForCustoms} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  includeForCustoms: EnumField<
    EntityT,
    DeSerializersT,
    BoYesNoEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField('IncludeForCustoms', BoYesNoEnum, true);
  /**
   * Representation of the {@link LandedCostCostLine.openAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OpenAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostCostLine.openAmountFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  openAmountFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('OpenAmountFC', 'Edm.Double', true);
  /**
   * Representation of the {@link LandedCostCostLine.broker} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  broker: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Broker', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostCostLine.brokerName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  brokerName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BrokerName', 'Edm.String', true);
  /**
   * Representation of the {@link LandedCostCostLine.costCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costCategory: EnumField<
    EntityT,
    DeSerializersT,
    LandedCostCostCategoryEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'CostCategory',
    LandedCostCostCategoryEnum,
    true
  );

  /**
   * Creates an instance of LandedCostCostLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, LandedCostCostLine, fieldOptions);
  }
}

export namespace LandedCostCostLine {
  /**
   * Metadata information on all properties of the `LandedCostCostLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LandedCostCostLine>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'LandedCostCode',
      name: 'landedCostCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AllocationBy',
      name: 'allocationBy',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Amount',
      name: 'amount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AmountFC',
      name: 'amountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor',
      name: 'factor',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'CostType',
      name: 'costType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'IncludeForCustoms',
      name: 'includeForCustoms',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'OpenAmount',
      name: 'openAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'OpenAmountFC',
      name: 'openAmountFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Broker',
      name: 'broker',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BrokerName',
      name: 'brokerName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostCategory',
      name: 'costCategory',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
