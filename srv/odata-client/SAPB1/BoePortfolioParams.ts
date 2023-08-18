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
 * BoePortfolioParams
 */
export interface BoePortfolioParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Portfolio Entry.
   * @nullable
   */
  portfolioEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Portfolio Id.
   * @nullable
   */
  portfolioId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Portfolio Code.
   * @nullable
   */
  portfolioCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BoePortfolioParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoePortfolioParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BoePortfolioParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BoePortfolioParams.portfolioEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portfolioEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PortfolioEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link BoePortfolioParams.portfolioId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portfolioId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PortfolioID', 'Edm.String', true);
  /**
   * Representation of the {@link BoePortfolioParams.portfolioCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portfolioCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PortfolioCode', 'Edm.String', true);

  /**
   * Creates an instance of BoePortfolioParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BoePortfolioParams, fieldOptions);
  }
}

export namespace BoePortfolioParams {
  /**
   * Metadata information on all properties of the `BoePortfolioParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoePortfolioParams>[] = [
    {
      originalName: 'PortfolioEntry',
      name: 'portfolioEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PortfolioID',
      name: 'portfolioId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'PortfolioCode',
      name: 'portfolioCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
