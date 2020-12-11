/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceGroupParams
 */
export interface ServiceGroupParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Service Group Code.
   * @nullable
   */
  serviceGroupCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceGroupParams.build]] instead.
 */
export function createServiceGroupParams(json: any): ServiceGroupParams {
  return ServiceGroupParams.build(json);
}

/**
 * ServiceGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceGroupParams> {
  /**
   * Representation of the [[ServiceGroupParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceGroupParams.serviceGroupCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serviceGroupCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ServiceGroupCode', this, 'Edm.String');

  /**
   * Creates an instance of ServiceGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceGroupParams);
  }
}

export namespace ServiceGroupParams {
  /**
   * Metadata information on all properties of the `ServiceGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceGroupParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ServiceGroupCode',
    name: 'serviceGroupCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceGroupParams {
    return deserializeComplexTypeV4(json, ServiceGroupParams);
  }
}
