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
 * ServiceCallBpAddressComponent
 */
export interface ServiceCallBpAddressComponent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Ship To Street.
   * @nullable
   */
  shipToStreet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Street No.
   * @nullable
   */
  shipToStreetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Block.
   * @nullable
   */
  shipToBlock?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Building.
   * @nullable
   */
  shipToBuilding?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To City.
   * @nullable
   */
  shipToCity?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Zip Code.
   * @nullable
   */
  shipToZipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To State.
   * @nullable
   */
  shipToState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To County.
   * @nullable
   */
  shipToCounty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Country.
   * @nullable
   */
  shipToCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address Type.
   * @nullable
   */
  shipToAddressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address 2.
   * @nullable
   */
  shipToAddress2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Address 3.
   * @nullable
   */
  shipToAddress3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Ship To Global Location Number.
   * @nullable
   */
  shipToGlobalLocationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Street.
   * @nullable
   */
  billToStreet?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Street No.
   * @nullable
   */
  billToStreetNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Block.
   * @nullable
   */
  billToBlock?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Building.
   * @nullable
   */
  billToBuilding?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To City.
   * @nullable
   */
  billToCity?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Zip Code.
   * @nullable
   */
  billToZipCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To State.
   * @nullable
   */
  billToState?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To County.
   * @nullable
   */
  billToCounty?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Country.
   * @nullable
   */
  billToCountry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Address Type.
   * @nullable
   */
  billToAddressType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Address 2.
   * @nullable
   */
  billToAddress2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Address 3.
   * @nullable
   */
  billToAddress3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill To Global Location Number.
   * @nullable
   */
  billToGlobalLocationNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ServiceCallBpAddressComponentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallBpAddressComponentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ServiceCallBpAddressComponent,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToStreet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToStreet', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToStreetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToStreetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToStreetNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBlock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToBlock', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToBuilding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToBuilding: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToBuilding',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToCity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCity', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToZipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToZipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToState', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToCounty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCounty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCounty', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShipToCountry', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToAddressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddressType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddressType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToAddress2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddress2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToAddress3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToAddress3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToAddress3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.shipToGlobalLocationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shipToGlobalLocationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ShipToGlobalLocationNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToStreet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToStreet', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToStreetNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToStreetNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToStreetNo',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToBlock} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBlock: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToBlock', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToBuilding} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToBuilding: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToBuilding',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToCity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToCity', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToZipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToZipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToZipCode', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToState} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToState: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToState', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToCounty} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCounty: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToCounty', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToCountry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToCountry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BillToCountry', 'Edm.String', true);
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToAddressType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddressType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToAddressType',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToAddress2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToAddress2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToAddress3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToAddress3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToAddress3',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ServiceCallBpAddressComponent.billToGlobalLocationNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billToGlobalLocationNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BillToGlobalLocationNumber',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of ServiceCallBpAddressComponentField.
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
      ServiceCallBpAddressComponent,
      fieldOptions
    );
  }
}

export namespace ServiceCallBpAddressComponent {
  /**
   * Metadata information on all properties of the `ServiceCallBpAddressComponent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallBpAddressComponent>[] =
    [
      {
        originalName: 'ShipToStreet',
        name: 'shipToStreet',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToStreetNo',
        name: 'shipToStreetNo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToBlock',
        name: 'shipToBlock',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToBuilding',
        name: 'shipToBuilding',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToCity',
        name: 'shipToCity',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToZipCode',
        name: 'shipToZipCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToState',
        name: 'shipToState',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToCounty',
        name: 'shipToCounty',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToCountry',
        name: 'shipToCountry',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToAddressType',
        name: 'shipToAddressType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToAddress2',
        name: 'shipToAddress2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToAddress3',
        name: 'shipToAddress3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShipToGlobalLocationNumber',
        name: 'shipToGlobalLocationNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToStreet',
        name: 'billToStreet',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToStreetNo',
        name: 'billToStreetNo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToBlock',
        name: 'billToBlock',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToBuilding',
        name: 'billToBuilding',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToCity',
        name: 'billToCity',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToZipCode',
        name: 'billToZipCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToState',
        name: 'billToState',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToCounty',
        name: 'billToCounty',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToCountry',
        name: 'billToCountry',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToAddressType',
        name: 'billToAddressType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToAddress2',
        name: 'billToAddress2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToAddress3',
        name: 'billToAddress3',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BillToGlobalLocationNumber',
        name: 'billToGlobalLocationNumber',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
