/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocsInWtGroups } from './DocsInWtGroups';
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
 * WtGroups
 */
export interface WtGroups<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Wt Abs Entry.
   * @nullable
   */
  wtAbsEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Percent.
   * @nullable
   */
  percent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Vat Amount.
   * @nullable
   */
  sumVatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Doc Total.
   * @nullable
   */
  sumDocTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Base Amount.
   * @nullable
   */
  sumBaseAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Accum Amount.
   * @nullable
   */
  sumAccumAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Percept Amount.
   * @nullable
   */
  sumPerceptAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Docs In Wt Groups Collection.
   * @nullable
   */
  docsInWtGroupsCollection?: DeserializedType<
    DeSerializersT,
    'SAPB1.DocsInWTGroups'
  >;
}

/**
 * WtGroupsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtGroupsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  WtGroups,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link WtGroups.wtAbsEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wtAbsEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTAbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link WtGroups.percent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  percent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Percent', 'Edm.Double', true);
  /**
   * Representation of the {@link WtGroups.sumVatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumVatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumVATAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WtGroups.sumDocTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumDocTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumDocTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link WtGroups.sumBaseAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumBaseAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumBaseAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link WtGroups.sumAccumAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumAccumAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SumAccumAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WtGroups.sumPerceptAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPerceptAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'SumPerceptAmount',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link WtGroups.docsInWtGroupsCollection} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docsInWtGroupsCollection: CollectionField<
    EntityT,
    DeSerializersT,
    DocsInWtGroups,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'DocsInWTGroupsCollection',
    DocsInWtGroups,
    true
  );

  /**
   * Creates an instance of WtGroupsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, WtGroups, fieldOptions);
  }
}

export namespace WtGroups {
  /**
   * Metadata information on all properties of the `WtGroups` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<WtGroups>[] = [
    {
      originalName: 'WTAbsEntry',
      name: 'wtAbsEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Percent',
      name: 'percent',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumVATAmount',
      name: 'sumVatAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumDocTotal',
      name: 'sumDocTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumBaseAmount',
      name: 'sumBaseAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumAccumAmount',
      name: 'sumAccumAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumPerceptAmount',
      name: 'sumPerceptAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocsInWTGroupsCollection',
      name: 'docsInWtGroupsCollection',
      type: DocsInWtGroups,
      isCollection: true
    }
  ];
}
