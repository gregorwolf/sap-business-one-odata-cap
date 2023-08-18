/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * DocsInWtGroups
 */
export interface DocsInWtGroups<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Doc Obj Type.
   * @nullable
   */
  docObjType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Doc Total.
   * @nullable
   */
  docTotal?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Amount.
   * @nullable
   */
  baseAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Accum Amount.
   * @nullable
   */
  accumAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Percept Amount.
   * @nullable
   */
  perceptAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Percent.
   * @nullable
   */
  percent?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * DocsInWtGroupsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocsInWtGroupsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DocsInWtGroups,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DocsInWtGroups.docEntry} property for query construction.
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
   * Representation of the {@link DocsInWtGroups.docObjType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docObjType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocObjType', 'Edm.String', true);
  /**
   * Representation of the {@link DocsInWtGroups.vatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VATAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocsInWtGroups.docTotal} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docTotal: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DocTotal', 'Edm.Double', true);
  /**
   * Representation of the {@link DocsInWtGroups.baseAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocsInWtGroups.accumAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accumAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccumAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocsInWtGroups.perceptAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  perceptAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PerceptAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link DocsInWtGroups.percent} property for query construction.
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
   * Creates an instance of DocsInWtGroupsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DocsInWtGroups, fieldOptions);
  }
}

export namespace DocsInWtGroups {
  /**
   * Metadata information on all properties of the `DocsInWtGroups` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocsInWtGroups>[] = [
    {
      originalName: 'DocEntry',
      name: 'docEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DocObjType',
      name: 'docObjType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VATAmount',
      name: 'vatAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DocTotal',
      name: 'docTotal',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseAmount',
      name: 'baseAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'AccumAmount',
      name: 'accumAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'PerceptAmount',
      name: 'perceptAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Percent',
      name: 'percent',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
