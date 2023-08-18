/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage } from './TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage';
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
 * TaxCodeDeterminationTcdKeyFieldValuePeriod
 */
export interface TaxCodeDeterminationTcdKeyFieldValuePeriod<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Efct From.
   * @nullable
   */
  efctFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Efct To.
   * @nullable
   */
  efctTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Code Determination Tcd Key Field Value Period By Usages.
   * @nullable
   */
  taxCodeDeterminationTcdKeyFieldValuePeriodByUsages?: DeserializedType<
    DeSerializersT,
    'SAPB1.TaxCodeDeterminationTCDKeyFieldValuePeriodByUsage'
  >;
}

/**
 * TaxCodeDeterminationTcdKeyFieldValuePeriodField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxCodeDeterminationTcdKeyFieldValuePeriodField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TaxCodeDeterminationTcdKeyFieldValuePeriod,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValuePeriod.absId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsId', 'Edm.Int32', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValuePeriod.efctFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  efctFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EfctFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValuePeriod.efctTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  efctTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EfctTo',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link TaxCodeDeterminationTcdKeyFieldValuePeriod.taxCodeDeterminationTcdKeyFieldValuePeriodByUsages} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCodeDeterminationTcdKeyFieldValuePeriodByUsages: CollectionField<
    EntityT,
    DeSerializersT,
    TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage,
    true,
    false
  > = this._fieldBuilder.buildCollectionField(
    'TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages',
    TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage,
    true
  );

  /**
   * Creates an instance of TaxCodeDeterminationTcdKeyFieldValuePeriodField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      TaxCodeDeterminationTcdKeyFieldValuePeriod,
      fieldOptions
    );
  }
}

export namespace TaxCodeDeterminationTcdKeyFieldValuePeriod {
  /**
   * Metadata information on all properties of the `TaxCodeDeterminationTcdKeyFieldValuePeriod` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxCodeDeterminationTcdKeyFieldValuePeriod>[] =
    [
      {
        originalName: 'AbsId',
        name: 'absId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'EfctFrom',
        name: 'efctFrom',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'EfctTo',
        name: 'efctTo',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'TaxCode',
        name: 'taxCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'TaxCodeDeterminationTCDKeyFieldValuePeriodByUsages',
        name: 'taxCodeDeterminationTcdKeyFieldValuePeriodByUsages',
        type: TaxCodeDeterminationTcdKeyFieldValuePeriodByUsage,
        isCollection: true
      }
    ];
}
