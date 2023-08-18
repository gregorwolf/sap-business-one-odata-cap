/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * CampaignResponseTypeParams
 */
export interface CampaignResponseTypeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Response Type.
   * @nullable
   */
  responseType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Response Type Description.
   * @nullable
   */
  responseTypeDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  isActive?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * CampaignResponseTypeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignResponseTypeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CampaignResponseTypeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CampaignResponseTypeParams.responseType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responseType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ResponseType', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignResponseTypeParams.responseTypeDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responseTypeDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ResponseTypeDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link CampaignResponseTypeParams.isActive} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isActive: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('IsActive', BoYesNoEnum, true);

  /**
   * Creates an instance of CampaignResponseTypeParamsField.
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
      CampaignResponseTypeParams,
      fieldOptions
    );
  }
}

export namespace CampaignResponseTypeParams {
  /**
   * Metadata information on all properties of the `CampaignResponseTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignResponseTypeParams>[] =
    [
      {
        originalName: 'ResponseType',
        name: 'responseType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ResponseTypeDescription',
        name: 'responseTypeDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'IsActive',
        name: 'isActive',
        type: 'Edm.Enum',
        isCollection: false
      }
    ];
}
