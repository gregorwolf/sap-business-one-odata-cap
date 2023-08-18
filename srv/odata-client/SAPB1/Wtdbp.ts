/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WtdDetailType } from './WtdDetailType';
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
 * Wtdbp
 */
export interface Wtdbp<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bp Key Part 1.
   * @nullable
   */
  bpKeyPart1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Key Part 2.
   * @nullable
   */
  bpKeyPart2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * W Tax Code.
   * @nullable
   */
  wTaxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Effective Date From.
   * @nullable
   */
  effectiveDateFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Effective Date To.
   * @nullable
   */
  effectiveDateTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Detail Type.
   * @nullable
   */
  detailType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * WtdbpField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class WtdbpField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Wtdbp,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Wtdbp.bpKeyPart1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpKeyPart1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPKeyPart1', 'Edm.String', true);
  /**
   * Representation of the {@link Wtdbp.bpKeyPart2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpKeyPart2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPKeyPart2', 'Edm.String', true);
  /**
   * Representation of the {@link Wtdbp.wTaxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WTaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link Wtdbp.effectiveDateFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveDateFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link Wtdbp.effectiveDateTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDateTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveDateTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link Wtdbp.rate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Rate', 'Edm.Double', true);
  /**
   * Representation of the {@link Wtdbp.detailType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  detailType: EnumField<EntityT, DeSerializersT, WtdDetailType, true, false> =
    this._fieldBuilder.buildEnumField('DetailType', WtdDetailType, true);

  /**
   * Creates an instance of WtdbpField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Wtdbp, fieldOptions);
  }
}

export namespace Wtdbp {
  /**
   * Metadata information on all properties of the `Wtdbp` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Wtdbp>[] = [
    {
      originalName: 'BPKeyPart1',
      name: 'bpKeyPart1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPKeyPart2',
      name: 'bpKeyPart2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WTaxCode',
      name: 'wTaxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'EffectiveDateFrom',
      name: 'effectiveDateFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EffectiveDateTo',
      name: 'effectiveDateTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'Rate',
      name: 'rate',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'DetailType',
      name: 'detailType',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
