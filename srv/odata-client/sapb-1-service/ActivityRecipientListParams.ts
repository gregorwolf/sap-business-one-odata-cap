/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ActivityRecipientListParams
 */
export interface ActivityRecipientListParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
  /**
   * Is Multiple.
   * @nullable
   */
  isMultiple?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipientListParams.build]] instead.
 */
export function createActivityRecipientListParams(json: any): ActivityRecipientListParams {
  return ActivityRecipientListParams.build(json);
}

/**
 * ActivityRecipientListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityRecipientListParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ActivityRecipientListParams> {
  /**
   * Representation of the [[ActivityRecipientListParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[ActivityRecipientListParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[ActivityRecipientListParams.active]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Active', this);
  /**
   * Representation of the [[ActivityRecipientListParams.isMultiple]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isMultiple: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsMultiple', this);

  /**
   * Creates an instance of ActivityRecipientListParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ActivityRecipientListParams);
  }
}

export namespace ActivityRecipientListParams {
  /**
   * Metadata information on all properties of the `ActivityRecipientListParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ActivityRecipientListParams>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Active',
    name: 'active',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'IsMultiple',
    name: 'isMultiple',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ActivityRecipientListParams {
    return deserializeComplexTypeV4(json, ActivityRecipientListParams);
  }
}
